/*
###################################
# Enviando Emails Automaticamente #
#              Usando             #
#         Google App Script       #
###################################
*/
//Função para criar menu no google sheets
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('AutoEmail')
      .addItem('Enviar Email', 'email')
      .addSeparator()
      .addToUi();
}

//Função principal para enviar emails
function email() {
  SpreadsheetApp.getUi();
  //sincronizando com o arquivo especifico do sheets e forms
  var sheet = SpreadsheetApp.openById('1_j4H67qd3s6BHKVjJ9zk9Bx_0h3DddjYpM7ApFGORvs')
  var forms = FormApp.openById('18FFl90C5VGYTIF5Nby9_9NqKZwEoSOZxXK_rod40EyU')
  //Verifica as informações de cada Coluna(letras)+Linha(i)
  for(i=2;i<=sheet.getLastRow();i++){
    var email = "B"+i
    var nome = "D"+i
    var aniversario = "E"+i
    

    /*  No próprio sheets temos uma função que compara o dia de hoje com o dia verificado.
        Se o resultado for verdadeiro para o caso de hoje ser aniversário de alguem,
        gurda as informações das colunas nas seguintes variáveis e adiciona à função MailApp.sendEmail().
    */
    if(sheet.getRange(aniversario).getValue()==true){
      var destino  = sheet.getRange(email).getValue();
      var titulo = sheet.getRange("F2").getValue(); 

      // Com o comando ".replace" sempre q estiver escrito "@p" no título ou no texto, o "@p" será substituido pelo conteudo q está numa determinada coluna.
      // Nesse caso coletamos o conteúdo da coluna "G2" do sheets, que guarda o nome das pessoas.
      var assunto = titulo.replace(/@p/g,sheet.getRange(nome).getValue());
      var texto = sheet.getRange("G2").getValue();
      var mensagem = texto.replace(/@p/g,sheet.getRange(nome).getValue());

      // MailApp.sendEmail(endereço de email de quem vai receber a mensagem, assunto/título do email, mensagem)
      MailApp.sendEmail(destino, assunto, mensagem);
    }
  }
  
}

