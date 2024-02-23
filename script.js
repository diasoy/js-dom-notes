document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const judul = document.getElementById("catatan-judul").value;
  const isi = document.getElementById("catatan-isi").value;
  const ul = document.querySelector(".cards");
  const buttonAksi = document.querySelector(".btn-aksi");

  const li = document.createElement("li");
  li.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = judul;
  li.appendChild(h3);

  const pIsi = document.createElement("p");
  pIsi.textContent = isi;
  li.appendChild(pIsi);

  const pTanggal = document.createElement("p");
  pTanggal.textContent = new Date().toDateString();
  li.appendChild(pTanggal);

  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.className = "btn-aksi";
  li.appendChild(btnEdit);
  btnEdit.addEventListener("click", function () {
    const newJudul = prompt("Masukkan judul baru", judul);
    const newIsi = prompt("Masukkan isi baru", isi);

    h3.textContent = newJudul;
    pIsi.textContent = newIsi;
  });

  const btnHapus = document.createElement("button");
  btnHapus.textContent = "Hapus";
  btnHapus.className = "btn-aksi";
  li.appendChild(btnHapus);
    btnHapus.addEventListener("click", function () {
      confirm("Apakah Anda yakin ingin menghapus catatan ini?");
    ul.removeChild(li);
  });

  ul.appendChild(li);

  document.getElementById("catatan-judul").value = "";
  document.getElementById("catatan-isi").value = "";
});
