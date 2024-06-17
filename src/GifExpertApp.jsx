import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack On Titan']);
    
    const onAddCategory = ( newCategory) => {

        if( categories.includes(newCategory) ) return;
        //Demon Slayer
             setCategories([ newCategory,...categories  ]);
        // setCategories( cat => [...cat, 'Demon Slayer'] );
    }

  return (
    <>

    <h1>GifExpertApp</h1>
    

   <AddCategory 
//    setCategories={ setCategories }
    onNewCategory= { (value)=> onAddCategory(value) }
   />
    
    { 
        categories.map( (category) => ( 
            <GifGrid 
            key={ category } 
            category={ category }/> 
        )) 
    }
    
        
        
    </>
  )
}
