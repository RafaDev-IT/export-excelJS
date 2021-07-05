
# Exceljs-export

Exceljs-export is a library to export data to an automatically generated excel with only sending 3 parameters

## Installation

To install, you can use npm

```bash
$ npm install exceljs-export
```

## Usage

```js
//sent data from local
import SaveExcel from 'exceljs-export'
const titlesProps =['n1', 'n2', 'n3'];
const dataProps =[[1,2,3],[4,5,6]];
SaveExcel({ data: dataProps, documentName: 'exportacionExcel', titles:titlesProps });

//sent data from endpoint
import SaveExcel from 'exceljs-export'
import axios from 'axios'

const exportUsers = () => {
    const users = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') 
      return res.data.map(item => Object.values(item))
    }
    users().then(res=>SaveExcel({ data: res, documentName: 'prueba', titles: ['User ID', 'ID', 'Title','Completado'] }))
}

exportUsers();
```
## Examples 
Data exported from endpoint

![sent data from endpoint](https://raw.githubusercontent.com/RafaDev-IT/export-excelJS/master/src/endpoint.PNG) 

Data exported from local

![sent data from local](https://raw.githubusercontent.com/RafaDev-IT/export-excelJS/master/src/local.PNG) 

# Props
Properties required by the library, data type, definition and examples.

| Name| Type | Description | Examples
| --- | --- | --| --|
| titles | Array of number or string | Title of the columns to show in the excel document | ['User ID', 'ID', 'Title','Completado'] |
| data | Array of Arrays of number or string | Data to export to excel document| [[1,2,3],[4,5,6]]|
| documentName| String|  This is the name of the document | 'testDocument'|


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Created by [Rafael Martinez](https://portafolio-rm.netlify.app)