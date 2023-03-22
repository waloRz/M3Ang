import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

}

let menuVisible = false;

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

//Función que oculta o muestra el menu

function mostrarOcultarMenu() {
  if (menuVisible) {
    menuVisible = false;
  } else {
    document.getElementById("nav2").classList = "dropdown_menu";
    menuVisible = true;
  }
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion

  document.getElementById("nav2").classList = "closed";
  menuVisible = false;
}