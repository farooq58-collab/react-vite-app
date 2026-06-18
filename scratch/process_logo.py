import os
from PIL import Image
import numpy as np
from collections import deque

def process_logo():
    img_path = 'src/assets/Logo(black).png'
    out_path = 'src/assets/Logo(white).png'
    
    if not os.path.exists(img_path):
        print(f"Error: {img_path} not found.")
        return
        
    img = Image.open(img_path).convert('RGBA')
    arr = np.array(img)
    
    # 1. Find bounding box of non-white pixels
    # Non-white means not R=255, G=255, B=255
    non_white = ~np.all(arr[:, :, :3] == 255, axis=-1)
    ymin, xmin = np.min(np.where(non_white), axis=1)
    ymax, xmax = np.max(np.where(non_white), axis=1)
    
    # Add a small padding around the bounding box
    pad = 10
    ymin = max(0, ymin - pad)
    ymax = min(img.height, ymax + pad)
    xmin = max(0, xmin - pad)
    xmax = min(img.width, xmax + pad)
    
    print(f"Original size: {img.size}")
    print(f"Cropped bounds: y=[{ymin}:{ymax}], x=[{xmin}:{xmax}]")
    
    # Crop the array
    cropped_arr = arr[ymin:ymax, xmin:xmax].copy()
    h, w, c = cropped_arr.shape
    
    # 2. Flood fill to identify external background (pixels near white connected to the edges)
    background_mask = np.zeros((h, w), dtype=bool)
    queue = deque()
    
    # Add all border pixels to queue if they are close to white
    for y in range(h):
        for x in [0, w - 1]:
            pixel = cropped_arr[y, x, :3]
            if np.all(pixel >= 240):
                queue.append((y, x))
                background_mask[y, x] = True
    for x in range(w):
        for y in [0, h - 1]:
            pixel = cropped_arr[y, x, :3]
            if np.all(pixel >= 240) and not background_mask[y, x]:
                queue.append((y, x))
                background_mask[y, x] = True
                
    # BFS flood fill
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        cy, cx = queue.popleft()
        for dy, dx in directions:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w:
                if not background_mask[ny, nx]:
                    pixel = cropped_arr[ny, nx, :3]
                    # If pixel is close to white, it is background
                    if np.all(pixel >= 235):
                        background_mask[ny, nx] = True
                        queue.append((ny, nx))
                        
    # 3. Create the final transparent white logo image
    final_arr = np.zeros_like(cropped_arr)
    
    for y in range(h):
        for x in range(w):
            if background_mask[y, x]:
                # External background -> transparent
                final_arr[y, x] = [0, 0, 0, 0]
            else:
                # Convert uint8 values to Python integers to prevent overflow/underflow
                r = int(cropped_arr[y, x, 0])
                g = int(cropped_arr[y, x, 1])
                b = int(cropped_arr[y, x, 2])
                a = int(cropped_arr[y, x, 3])
                
                # Check if it's red (brand red has R much higher than G and B)
                is_red = (r > 120) and (r - g > 60) and (r - b > 60)
                
                if is_red:
                    # Keep red color, make fully opaque
                    final_arr[y, x] = [r, g, b, 255]
                else:
                    # It's text (either black text to be made white, or white text in red box)
                    lum = int(0.299 * r + 0.587 * g + 0.114 * b)
                    if lum > 180:
                        final_arr[y, x] = [255, 255, 255, 255]
                    else:
                        alpha = 255 - lum
                        final_arr[y, x] = [255, 255, 255, alpha]
                        
    out_img = Image.fromarray(final_arr, 'RGBA')
    out_img.save(out_path, 'PNG')
    print(f"Saved processed white logo to {out_path} with size {out_img.size}")

if __name__ == '__main__':
    process_logo()
