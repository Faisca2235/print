
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Pega a URL enviada pelo formulário
      const urlToCapture = req.body.url;
      
      // URL de redirecionamento com a URL do site para captura já incluída
      const screenshotMachineUrl = `https://www.screenshotmachine.com/?url=${encodeURIComponent(urlToCapture)}`;
  
      // Redireciona o usuário para o Screenshot Machine
      res.writeHead(302, {
        Location: screenshotMachineUrl,
      });
      res.end();
    } else {
      res.status(405).send('Method Not Allowed');
    }
  }
  