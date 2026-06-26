import { Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Accordion } from "../../components/accordion/accordion";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordion,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
