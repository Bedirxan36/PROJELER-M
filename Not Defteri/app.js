const addBtn = document.getElementById('add')

// Kayıtlı notları başlangıçta yükle
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
  notes.forEach((note) => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <img src="./image/pin.png" alt="pin">
   <div class="tools">
        <button class="edit"><i class="fa-solid fa-pencil"></i></button>
        <button class="delete"><i class="fa-solid fa-eraser"></i></button>
      </div>

      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class="${text ? 'hidden' : ''}"></textarea>
  `

  const deleteBtn = note.querySelector('.delete')
  const editBtn = note.querySelector('.edit')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  // --- EKLENEN KISIM BAŞLANGIÇ ---
  // Eğer hafızadan gelen bir metin varsa, bunu kutulara dolduruyoruz.
  textArea.value = text;
  // 'marked' kütüphanesi varsa markdown çevirisi yapar, yoksa düz metin yazar
  // Hata almamak için basit bir kontrol ekleyebilirsin veya direkt marked(text) kullanabilirsin.
  // Senin index.html dosyanı baz alarak:
  main.innerHTML = marked(text); 
  // --- EKLENEN KISIM BİTİŞ ---

  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS() // Silerken de hafızayı güncelle
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)

    updateLS() // Her harf girişinde hafızayı güncelle
  })

  document.body.appendChild(note)
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []
  notesText.forEach((note) => notes.push(note.value))
  
  // Notları tarayıcı hafızasına (localStorage) kaydet
  localStorage.setItem('notes', JSON.stringify(notes))
}