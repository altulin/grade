import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const { del } = pluginsObject;
const {
  distFolder,
  distFolderZip,
  made: { imgFiles, cssFolder },
  dist: { htmlFiles },
} = paths;

const delDistFolder = () => {
  return del(distFolder, { force: true }); // Удаляем всю папку продакшн
};

const cleanZip = () => {
  return del(distFolderZip, { force: true }); // Удаляем всю папку продакшн zip
};

const cleanImg = () => {
  return del(imgFiles, { force: true }); // Удаляем всё содержимое папки "img/" в каталоге /_src/
};

const cleanHtml = () => {
  return del(htmlFiles, { force: true }); // Удаляем html в каталоге /_src/
};

const cleanCss = () => {
  return del(`${cssFolder}*.{css,map}`, { force: true }); // Удаляем .css .map в папке /_src/css
};

const cleanTools = {
  delDistFolder,
  cleanImg,
  cleanZip,
  cleanHtml,
  cleanCss,
};

export default cleanTools;
