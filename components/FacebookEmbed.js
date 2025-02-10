import { useEffect } from 'react';

export default function FacebookEmbed() {
  useEffect(() => {
    // Load the Facebook SDK for JavaScript
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100086788057177%2Fvideos%2F631106936128692%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
        }}
      />
    </div>
  );
}
