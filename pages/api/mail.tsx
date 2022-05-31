const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req,res) => {
   const body = JSON.parse(req.body)
   
   const message = `
   Nome/Empresa:${body.Empresa}\r\n
   Assunto: ${body.Assunto}\r\n
   Messagem: ${body.Mensagem}
   `;
   const data = {
      to:'mathfernando@hotmail.com',
      from: 'matheus@awer.co',
      subject: `${body.Assunto}`,
      text: message,
      html: message.replace(/\r\n/g,'<br>')
   }

   mail.send(data)
   res.status(200).json({status: 'Ok'})
}