import React, { useState } from 'react';
import { Service } from './Service';
import data from '@/app/components/helper/Details';
import Card from './Card'; // Import the Card component
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import the Image component from next/image

import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  image: StaticImageData; // Change the type to StaticImageData
  height: string;
  serviceUrl: string;
}

function ServiceDetail() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const router = useRouter();

  const handleShowDetail = (clickedService: Service) => {
    setCurrentService(clickedService);
    setShowDetail(true);
  };

  // Function to construct the service URL based on the current page
  const getServiceUrl = (serviceName: string) => {
    return router.pathname === '/' ? `/service/${serviceName}` : ''; // Adjust the URL based on the actual route
  };

  return (
    <div>
      {Object.entries(data).map(([serviceName, service]) => (
        <div key={serviceName}>
          <Card
            title={serviceName}
            image={service.image}
            height="h-64"
            serviceUrl={getServiceUrl(serviceName)} // Pass the dynamic service URL
          />
          <h1>{serviceName}</h1>
          <Image src={service.image} alt={serviceName} width={300} height={200} />
          <p>{service.description}</p>
          <button onClick={() => handleShowDetail(service)}>Read More</button>
        </div>
      ))}
      {showDetail && currentService && (
        <div>
          <h2>{currentService.title}</h2>
          <Image src={currentService.image} alt={currentService.title} width={300} height={200} />
          <p>{currentService.description}</p>
        </div>
      )}
    </div>
  );
}

export default ServiceDetail;
