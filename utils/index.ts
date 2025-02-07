

export async function fetchTemp() { 
    const response = await fetch('/api/products' , { next: { revalidate: 0 } }); 
    const result = await response.json(); 
    return result.posts;
}


export async function fetchTemp1() { 
    const response = await fetch(`/api/products` , { next: { revalidate: 0 } }); 
    const result = await response.json();  
    return result.posts;
}


export async function fetchTemp2(type:any) { 
    const response = await fetch(`/api/posts1/${type}` , { next: { revalidate: 0 } }); 
    const result = await response.json();  
    return result.posts;
}



export async function fetchTemp3(name:any) { 
    const response = await fetch(`/api/posts2/${name}` , { next: { revalidate: 0 } }); 
    const result = await response.json();  
    return result.posts;
}


export async function fetchTemp4(id:any) { 
    const response = await fetch(`/api/posts3/${id}` , { next: { revalidate: 0 } }); 
    const result = await response.json();  
    return result.posts;
}


export async function fetchRate() { 
    const response = await fetch('/api/rate' , { next: { revalidate: 0 } }); 
    const result = await response.json();  
    return result.posts;
}

export async function fetchRate1(name:any) { 
    const response = await fetch(`/api/rate1/${name}` , { next: { revalidate: 0 } }); 
    const result = await response.json();  
    return result.posts;
}
 
 