import React from 'react';
// import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-0 pt-6">
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </CardBody>
          </Card>
        ))} */}
      </div>
    </div>
  );
}