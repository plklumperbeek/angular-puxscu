export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

/*
function f_zie_grafieken(){
	let Mstatus = "f_zie_grafieken";
	
       
		let m_url = "geoloc/grafiekenG.php?";
			m_url +="&gebruiker_id=r3"
			m_url += "&gebruikersnaam=pieter"
			m_url += "&tocht=2022-1"
		
			m_url += "&b_pub=false"
			let u_str = m_url.length;
			m_url += "&ustr="+u_str+"&s_eind="+Math.random();
	
     
        

       function httpGetAsync6(m_url, f_callback)
       {
           var xmlHttp = new XMLHttpRequest();
           xmlHttp.onreadystatechange = function() { 
               if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                   f_callback(xmlHttp.responseText);
           }
           xmlHttp.open("GET", m_url, true); // true for asynchronous 
           xmlHttp.send(null);
       }
    
       function f_callback(res){
        
           var c_grafbox = document.createElement("div");
           c_grafbox.id = "grafbox";
		   c_grafbox.className = "c_grafboxbox";
		   c_grafbox.style.visibility = "hidden";
           
        
           document.body.appendChild(c_grafbox);
			
			c_grafbox.innerHTML = res;

		   
		   google.charts.setOnLoadCallback(f_barchart); 	
		   google.charts.setOnLoadCallback(draw_pie_sys); // draw_chart moet ervoor zij
		   google.charts.setOnLoadCallback(draw_tijd_sys); 	
	
		
//noteer(res)
 
          }
          httpGetAsync6(m_url, f_callback)
    
    
    }
    f_zie_grafieken()
  */  

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/