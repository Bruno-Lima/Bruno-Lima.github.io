// ---------------------------------------------------------------
// Configuração. Preenche o email da equipa para mostrar o botão
// "Email the team" na secção "Join YACC".
// ---------------------------------------------------------------
const CONFIG = {
  email: "" // por exemplo: "yacc@exemplo.pt"
};

// Fotos e logótipos: se o ficheiro não existir, a imagem é escondida
// e o avatar com iniciais (ou o nome do patrocinador) fica visível.
function watchImage(img) {
  const holder = img.closest(".avatar, .sponsor, .shot");
  if (!holder) return;
  const fail = function () { holder.classList.add("missing"); };
  img.addEventListener("error", fail);
  if (img.complete && img.naturalWidth === 0) fail();
}

document.addEventListener("DOMContentLoaded", function () {
  const mail = document.getElementById("join-email");
  if (CONFIG.email) {
    mail.href = "mailto:" + CONFIG.email;
    mail.hidden = false;
  }
  document.querySelectorAll(".avatar img, .sponsor img, .shot img").forEach(watchImage);
});
