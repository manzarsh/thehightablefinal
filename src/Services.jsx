export default function Services() {
    const services = [
         {
           title: 'Programming Services',
           image: './images/PS.jpeg',
           description: 'Expert coding solutions for your business needs. I provide reliable, efficient, and scalable programming services to help you achieve your goals.',
         },
         {
           title: 'Mobile App Development',
           image: './images/mobileapp.jpg',
           description: 'I design and build intuitive, user-friendly mobile apps for all platforms, bringing your ideas to life and elevating your brand.',
         },
         {
           title: 'Web Development',
           image: './images/wd.jpeg',
           description: 'I create web solutions that engage your audience and drive results in web applications.',
         },
       ];
     
       return (
         <div style={{ textAlign: 'center', padding: '20px' }}>
           <h1>Services</h1>
           <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
             {services.map((service, index) => (
               <div key={index} style={{ margin: '20px', maxWidth: '300px' }}>
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                 />
                 <h3>{service.title}</h3>
                 <p>{service.description}</p>
               </div>
             ))}
           </div>
         </div>
       );
}
   