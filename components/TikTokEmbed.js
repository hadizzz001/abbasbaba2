import { useEffect } from 'react';

export default function TikTokEmbed() {
  useEffect(() => {
    // Ensure the TikTok embed script is loaded
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@shoeslebanon/video/7468993107615436040" data-video-id="7468993107615436040" style="max-width: 605px; min-width: 325px;">
                  <section>
                    <a target="_blank" title="@username" href="https://www.tiktok.com/@shoeslebanon">@shoeslebanon</a>
                    <p>Follow Us</p>
                    <a target="_blank" title="♬ original sound" href="https://www.tiktok.com/music/original-sound-id">♬ original sound</a>
                  </section>
                </blockquote>`,
      }}
    />
  );
}
