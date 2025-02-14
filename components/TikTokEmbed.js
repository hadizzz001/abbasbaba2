import { useEffect, useState } from 'react';

export default function TikTokEmbed() {
  const [embedHtml, setEmbedHtml] = useState('');

  useEffect(() => {
    async function fetchTikTokEmbed() {
      try {
        const response = await fetch('/api/social/Tiktok'); // Fetch API data
        const data = await response.json();

        if (data[0] && data[0].link) {
          // Extract videoId (last part of the URL)
          const videoId = data[0].link.split('/').pop();

          // Set the embed HTML
          setEmbedHtml(`
            <blockquote class="tiktok-embed" cite="${data[0].link}" data-video-id="${videoId}" style="max-width: 605px; min-width: 325px;">
              <section>
                <a target="_blank" title="@username" href="${data[0].link}">@shoeslebanon</a>
                <p>Follow Us</p>
                <a target="_blank" title="♬ original sound" href="https://www.tiktok.com/music/original-sound-id">♬ original sound</a>
              </section>
            </blockquote>
          `);
        }
      } catch (error) {
        console.error('Error fetching TikTok embed:', error);
      }
    }

    fetchTikTokEmbed();
  }, []);

  useEffect(() => {
    // Ensure the TikTok embed script is loaded
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [embedHtml]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
