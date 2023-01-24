import "./styles/main.scss"

import {drawGalleryItem} from './js/helpers'
import data from './js/data'

const galleryContainerElement = document.querySelector('.gallery-container')

data.map(galleryItem => galleryContainerElement.appendChild(drawGalleryItem(galleryItem)))