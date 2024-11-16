import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #4338ca, #7e22ce)',
            fontSize: 60,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div 
            style={{ 
              fontSize: 80, 
              marginBottom: 20,
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '20px 40px',
              borderRadius: '16px',
            }}
          >
            SANGANAK
          </div>
          <div style={{ 
            fontSize: 40, 
            maxWidth: '80%',
            opacity: 0.9,
          }}>
            Innovative IT Solutions
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}