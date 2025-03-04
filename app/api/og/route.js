import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge', // Required for Vercel OG
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const imgg = searchParams.get('imgg')  ;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          color: 'white',
          fontSize: 48,
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <img
          src={imgg}
          alt="Dynamic Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1 }}
        />
        <span style={{ zIndex: 10 }}>Abbas Baba</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
