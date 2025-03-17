import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const ComplaintsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="mb-8">
        <div className="flex flex-wrap">
          

          <div className="basis-10/12 max-w-full px-3">
            <h2 className="text-2xl font-bold">Policy Statement</h2>

            <p>
              Whilst APN Elec is committed to providing excellent Customer Service, we are human, and sometimes mistakes are made. If you do have any problems with our work, please do let us know as we aim to resolve any concerns promptly and efficiently. We will also use your feedback to improve our existing procedures.
            </p>

            <p>
              Our complaints procedure has been set up for people who feel dissatisfied with the service or the work completed. APN Elec have a simple approach for ease of handling complaints. This policy will be reviewed monthly to ensure that necessary improvements to our service are identified and more importantly acted upon.
            </p>

            <p>
              We aim to make sure that complaints are dealt with promptly, efficiently, courteously and systematically. Customers are kept informed of the progress and resolution of their complaint.
            </p>
          </div>
          <div className="basis-2/12 max-w-full px-3">
            <Image
              alt="complaint"
              src="/COMPLANTS.svg"
              width={200}
              height={200}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">How can complaints be made?</h2>

        <ul className="list-disc pl-5">
          <li className="flex items-start gap-2">
            <Check size={20} className="mr-2 min-w-[20px]" />
            <strong>By speaking with a member of our team</strong>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="mr-2 min-w-[20px]" />
            <strong>In writing</strong>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="mr-2 min-w-[20px]" />
            <strong>By Email: solar@apnelec.co.uk</strong>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="mr-2 min-w-[20px]" />
            <strong>By completing the complaints form</strong>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="mr-2 min-w-[20px]" />
            <strong>
              On receiving your complaint, we will ensure your complaint is registered, acknowledged and responded to in accordance with our complaints handling process below. We will send you a consumer document checklist which will detail the information we require in order to investigate your concerns
            </strong>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">How we handle complaints and what will happen next?</h2>

        <p>
          We may request further information to enable us to investigate the concerns which you raised, please note should this information not be provided, we may be unable to fully investigate your concerns.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Complaint Acknowledgement and Complaint Response</h2>

        <p>
          When we receive your complaint it will be recorded on our system and allocated a reference number. You will receive acknowledgement of your complaint within 2 working days in writing or by email (as requested). At this time we may request further information from you to be able to investigate your concerns, once the relevant information has been provided, we will investigate and provide a written response within 14 days stating how we intend to address your concerns.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Complaint Response Appeal</h2>

        <p>
          If you are not satisfied with the results of our investigation you have the right to appeal our decisions. Your appeal must by lodged within 14 days from our date on the complaint response letter. If it has not been possible to resolve your concerns at this stage, we may escalate your complaint to an Appeal Review. However, should no further information be provided, your complaint will not be escalated, and the decision will remain our final response to the matter.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Appeal Review</h2>

        <p>
          On review of your Complaint Response Appeal, should new information be bought to light, the complaint will be reviewed. You should expect to receive a full response within 14 days, or a letter/email explaining any reason why further time is required to investigate your complaint and details of when you should expect a full response by.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Alternative Dispute Resolution (ADR)</h2>

        <p>
          If at any time a dispute cannot be resolved amicably then both parties can refer the matter to an independent conciliation. We must agree to conciliation if that is your wish. The Conciliation Service used is that offered by the Renewable Energy Consumer Code (RECC). It aims to reach a non-legal solution to the dispute in a reasonable timescale.
        </p>

        <p>For more information on RECC Alternative dispute resolution please visit</p>

        <p>https://www.recc.org.uk/consumers/how-to-complain</p>

        <p>See below contact details for Renewable Energy Consumer Code (RECC)</p>

        <address>
          <p>
            <b>Written by Email: </b>
            <a href="mailto:disputeresolution@recc.org.uk">disputeresolution@recc.org.uk</a>.
          </p>
          <p>
            <b>Address:</b>
            <br />
            York House,
            <br />
            23 Kingsway,
            <br />
            London
            <br />
            WC2B 6UJ
            <br />
          </p>
          <p>
            <b>Tel:</b> <a href="tel:02079810850">0207 981 0850</a>
          </p>
        </address>
      </div>

      <div>
        <p>
          If at any stage of the complaints procedure a settlement is offered, the associated acceptance form must be signed and returned to us without delay. Any offer that has not been accepted will be automatically withdrawn after 6 months.
        </p>

        <p>All customer complaints are treated in strictest confidence, fairly and comply with the Data Protection Act.</p>
      </div>
    </div>
  );
};

export default ComplaintsPage;
