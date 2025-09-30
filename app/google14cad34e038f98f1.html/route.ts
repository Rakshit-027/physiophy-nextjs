export async function GET() {
  return new Response('google-site-verification: google14cad34e038f98f1.html', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
