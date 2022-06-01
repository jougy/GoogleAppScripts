class AutoEmailClass{
  sheetSinc(id){
    var sheet = SpreadsheetApp.openById(id)
  }
  defNome(nome){
    this.nome=nome;
    return nome;
  }
  getValue(valor){
    this.valor = sheet.getRange(valor).getValue()
  }
  autoEmail(colunaEmail,colunaNome,colunaData,texto){
    for(i=2;i<=sheet.getLastRow();i++){
      var email = colunaEmail + i;
      var nomeAuto = colunaNome + i;
      if(colunaNome != ""){
        nomeAuto = colunaNome + i;
        var nome = nomeAuto
      }
      if(colunaData != ""){
       var dataEnvio = colunaData+i
       if(getValue(colunaData)==true){
        var destino  = sheet.getRange(email).getValue()
        var titulo = sheet.getRange(this.titulo).getValue()
        var assunto = titulo.replace(/@p/g,sheet.getRange(nome).getValue())
        this.texto = sheet.getRange(texto).getValue();
        var mensagem = texto.replace(/@p/g,sheet.getRange(nome).getValue());
        MailApp.sendEmail(destino, assunto, mensagem)
      }
      }
      else{
        var destino  = sheet.getRange(email).getValue()
        var titulo = sheet.getRange(this.titulo).getValue()
        var assunto = titulo.replace(/@p/g,sheet.getRange(nome).getValue())
        var texto = sheet.getRange(this.texto).getValue();
        var mensagem = texto.replace(/@p/g,sheet.getRange(nome).getValue());
        MailApp.sendEmail(destino, assunto, mensagem)
      }
    }
  }

  sendEmail(nome, endereco, titulo, texto){
    this.nome = nome
    this.endereco = endereco
    this.titulo = sheet.getRange(titulo).getValue()
    var assunto = titulo.replace(/@p/g,sheet.getRange(nome).getValue())
    this.texto = sheet.getRange(texto).getValue();
    var mensagem = texto.replace(/@p/g,sheet.getRange(nome).getValue());
    MailApp.sendEmail(destino, assunto, mensagem)
  }
}

let email1 = new AutoEmailClass();
function onOpen() {
  email1.defNome("NOME INDEFINIDO")
  var sheet = SpreadsheetApp.openById("1w8pQ65UBDG2h1MkDqAhuVOV82_KRxxuWTbLtD3J6g2w");
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu("Auto Email");
  menu.addItem("Enviar Email", "email")
  menu.addToUi()
}

function email() {
  email1.sendEmail("")
}
function emailEmCadeia(){
  email1.autoEmail()
}
  
