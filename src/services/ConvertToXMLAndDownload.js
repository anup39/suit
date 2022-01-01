import { saveAs } from 'file-saver';
import XMLParser from 'react-xml-parser';

const convertTOXML = (menuClose, data) => {
  menuClose();
  const currentData = new XMLParser().parseFromString(JSON.stringify(data));
  console.log(currentData);
  saveAs(currentData, 'work-list.xml');
};

export default convertTOXML;
