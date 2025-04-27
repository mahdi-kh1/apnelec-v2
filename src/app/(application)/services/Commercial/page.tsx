import React from "react";
import { Check, FileText } from "lucide-react";

const CommercialServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-10 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Commercial Electrical Services
      </h1>
      <p className="mb-4">
        As we introduce more technology and electrical appliances to the
        workplace, we need to make sure that they are safe and properly
        installed.
      </p>
      <p className="mb-4">
        APN Elec can help you make sure that your workplace is safe for
        yourself, your customers, and employees and can provide all the
        certification for electrical work you will need to ensure that your
        business is compliant with government requirements.
      </p>
      <p className="mb-4">
        APN commercial electrical services is your local qualified electrician
        based in Hove and working throughout East and West Sussex in all kinds
        of commercial electrical installations and repairs.
      </p>
      <hr className="my-6" />
      <table className="table-auto w-full mb-6">
        <tbody>
          <tr>
            <td className="py-2">
              APN Elec can offer services to many kinds of business.
            </td>
          </tr>
          <tr>
            <td className="py-2">Shops, restaurants, and hotels</td>
          </tr>
          <tr>
            <td className="py-2">Factories and industrial units</td>
          </tr>
          <tr>
            <td className="py-2">Offices</td>
          </tr>
          <tr>
            <td className="py-2">The Services we offer:</td>
          </tr>
          <tr>
            <td className="py-2">Installation</td>
          </tr>
          <tr>
            <td className="py-2">
              Planning design and electrical schematic diagrams
            </td>
          </tr>
          <tr>
            <td className="py-2">Inspection and testing</td>
          </tr>
          <tr>
            <td className="py-2">Maintenance and repairs</td>
          </tr>
        </tbody>
      </table>
      <blockquote className="dg-blockquote text-left left-border color-dark">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="Boxes_title">Commercial Electrical Jobs</h3>
          </div>

          <div className="col-sm-4">
            <div className="dng-list list-icon em-background line-solid">
              <ul>
                <li><Check />New shops and refits</li>
                <li><Check />Retail park premises</li>
                <li><Check />Commercial offices</li>
                <li><Check />Project management</li>
                <li><Check />Electrical design</li>
                <li><Check />Electrical installation</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="dng-list list-icon em-background line-solid">
              <ul>
                <li><Check />Electrical refurbishment</li>
                <li><Check />Electrical maintenance</li>
                <li><Check />Emergency lighting</li>
                <li><Check />PAT testing</li>
                <li><Check />Fire and&nbsp;smoke alarm systems</li>
                <li><Check />Security alarms</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="dng-list list-icon em-background line-solid">
              <ul>
                <li><Check />Data cabling</li>
                <li><Check />Visual / audio systems</li>
                <li><Check />CCTV</li>
                <li><Check />Door entry systems</li>
                <li><Check />Electrical testing &amp; inspections</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-12">
            <p className="pt-40" style={{ textAlign: "center" }}>
              <a
                className="dg-btn-2 size-lg icon-left btn-accent border-1px"
                href="/en-gb/Services/Enquiries"
                target="_blank"
                title="Enquiries for Commercial Electrical Jobs"
              >
                <FileText />
                <span>Enquiries</span>
              </a>
            </p>
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default CommercialServicesPage;
