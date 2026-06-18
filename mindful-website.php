<?php
/*
Plugin Name: Mindful Website React App
Description: Embeds the Mindful Website React App into your WordPress site inside a secure, style-isolated iframe. Use the shortcode [mindful_website] to display it.
Version: 1.0.0
Author: Antigravity
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function mindful_website_shortcode() {
    $iframe_url = plugins_url( 'dist/index.html', __FILE__ );
    
    ob_start();
    ?>
    <style type="text/css">
        /* Force parent containers containing the iframe to be full-width */
        .entry-content:has(.mindful-iframe-container),
        .post-content:has(.mindful-iframe-container),
        .site-main:has(.mindful-iframe-container),
        .page-content:has(.mindful-iframe-container),
        .content-area:has(.mindful-iframe-container),
        #content:has(.mindful-iframe-container) {
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* Style the iframe outer container */
        .mindful-iframe-container {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 400px !important;
            overflow: hidden !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background-color: #f9fafb !important;
        }

        /* Ensure the iframe itself is not constrained by theme styles */
        #mindful-iframe {
            width: 100% !important;
            max-width: none !important;
            max-height: none !important;
            height: 800px !important; /* Initial fallback height forced so themes cannot collapse it */
            min-height: 400px !important;
            border: none !important;
            display: block !important;
            overflow: hidden !important; /* Hide the scrollbar inside the iframe */
            margin: 0 !important;
            padding: 0 !important;
        }
    </style>
    
    <div class="mindful-iframe-container">
        <iframe src="<?php echo esc_url( $iframe_url ); ?>" 
                id="mindful-iframe"
                scrolling="no">
        </iframe>
    </div>
    
    <script type="text/javascript">
        (function() {
            if (window.__mindful_resizer_initialized) return;
            window.__mindful_resizer_initialized = true;

            function sendViewportData() {
                var iframe = document.getElementById('mindful-iframe');
                if (iframe && iframe.contentWindow) {
                    var rect = iframe.getBoundingClientRect();
                    iframe.contentWindow.postMessage({
                        type: 'parent-viewport',
                        iframeTop: rect.top,
                        iframeBottom: rect.bottom,
                        parentInnerHeight: window.innerHeight
                    }, '*');
                }
            }

            window.addEventListener('message', function(event) {
                if (event.data && event.data.type === 'resize-iframe') {
                    var iframe = document.getElementById('mindful-iframe');
                    if (iframe && event.data.height) {
                        var targetHeight = Math.max(600, parseInt(event.data.height, 10));
                        iframe.style.setProperty('height', targetHeight + 'px', 'important');
                        sendViewportData();
                    }
                }
            });

            window.addEventListener('scroll', sendViewportData, { passive: true });
            window.addEventListener('resize', sendViewportData);
            
            setTimeout(sendViewportData, 1000);
            setTimeout(sendViewportData, 2000);
            setTimeout(sendViewportData, 3000);
        })();
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode( 'mindful_website', 'mindful_website_shortcode' );
