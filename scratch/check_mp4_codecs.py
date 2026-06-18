import os

video_path = 'public/Hero/hero-video.mp4'

if not os.path.exists(video_path):
    print("File not found:", video_path)
    exit(1)

with open(video_path, 'rb') as f:
    data = f.read(500000) # Read the first 500KB which contains the header/moov box

print("File size:", os.path.getsize(video_path), "bytes")

# Search for common FourCC codes
codecs = ['avc1', 'hvc1', 'hev1', 'mp4a', 'vp09', 'apch', 'apcn', 'apcs', 'apco', 'ap4h']
found = []
for codec in codecs:
    idx = data.find(codec.encode('ascii'))
    if idx != -1:
        found.append((codec, idx))

print("Found codec signatures in the file:")
for f in found:
    print(f"- {f[0]} at byte offset {f[1]}")
