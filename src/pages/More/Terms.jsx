import React from 'react';
import { Link, } from 'react-router-dom';
import './Terms.module.scss';

const Terms = () => {
  return (
    <div
      className="padding-4p"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div className="header">
        <div className="white">
          <h2>Terms of Service</h2>
          <Link to="/more">
            <span className="icon-left-arrow" />
            <br />
            <p>Back</p>
          </Link>
        </div>
      </div>
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div className="more-form terms-conditions">
          <h2>SCRATCHSHARK TERMS AND CONDITIONS OF SERVICE</h2>
          <h2>Effective Date:</h2>
          <p>
            Welcome to SCRATCHSHARK,INC. (“Company”, “We”, “Us”, “Our”) mobile
            device software application (the “Company Software”), website, and
            any other mobile or web services or applications owned, controlled,
            or offered by Company now or in the future (collectively, the
            “Company Services”). For clarity, any reference herein to “Company
            Services” includes the “Company Software.” Users who access,
            download, use, purchase and/or subscribe to the Company Services
            (collectively or individually “You” or “Your” or “User” or “Users”)
            must do so under the following Terms and Conditions of Service (this
            “Agreement”).
          </p>

          <p>
            THIS AGREEMENT CONSTITUTES A LEGALLY BINDING AGREEMENT BETWEEN YOU
            AND COMPANY. BEFORE USING ANY COMPANY SERVICES, PLEASE READ IT
            CAREFULLY. BY ACCESSING, DOWNLOADING, USING, PURCHASING AND/OR
            SUBSCRIBING TO THE COMPANY SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE
            READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE TERMS OF THIS
            AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, THEN PLEASE CEASE
            USING THE COMPANY SERVICES IMMEDIATELY.
          </p>

          <p>
            SECTION 20 OF THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW
            DISPUTES BETWEEN YOU AND US ARE RESOLVED. IN PARTICULAR, THE
            ARBITRATION AGREEMENT IN THAT SECTION WILL, WITH LIMITED EXCEPTIONS,
            REQUIRE DISPUTES BETWEEN YOU AND US TO BE SUBMITTED TO BINDING AND
            FINAL ARBITRATION, UNLESS YOU OPT OUT. IN ADDITION: (1) YOU WILL
            ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST US ON AN INDIVIDUAL
            BASIS, AND NOT IN ANY CLASS OR REPRESENTATIVE PROCEEDING; AND (2)
            YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO
            HAVE A JURY TRIAL ON YOUR CLAIMS. PLEASE SEE SECTION 20 FOR MORE
            INFORMATION REGARDING THIS ARBITRATION AGREEMENT, THE POSSIBLE
            EFFECTS OF THIS ARBITRATION AGREEMENT, AND HOW TO OPT OUT OF THE
            ARBITRATION AGREEMENT.
          </p>

          <ul>
            <li>AGE RESTRICTIONS AND RESPONSIBLE USE.</li>
            <li>
              <u>NO USE BY UNDERAGE PERSONS.</u>
              {' '}
              NO PERSONS UNDER THE AGE OF
              EIGHTEEN (18) YEARS (OR TWENTY-ONE (21) YEARS IN PLACES WHERE
              EIGHTEEN (18) YEARS IS NOT THE AGE OF MAJORITY or where twenty-one
              (21) years of age is the minimum age under state law to
              participate in the lottery) MAY DIRECTLY OR INDIRECTLY VIEW,
              POSSESS OR OTHERWISE USE THE COMPANY SERVICES.
            </li>
            <li>
              <u>YOU MUST BE A LEGAL ADULT.</u>
              {' '}
              YOU HEREBY REPRESENT AND WARRANT
              THAT YOU ARE CURRENTLY EIGHTEEN (18) YEARS OF AGE OR OVER (OR
              TWENTY-ONE (21) YEARS IN PLACES WHERE EIGHTEEN (18) YEARS IS NOT
              THE AGE OF MAJORITY) AND YOU ARE CAPABLE OF LAWFULLY ENTERING INTO
              AND PERFORMING ALL THE OBLIGATIONS SET FORTH IN THIS AGREEMENT.
            </li>
            <li>
              <u>RESPONSIBLE USE.</u>
              {' '}
              INSTANT WIN LOTTERY TICKETS ARE GAMES OF
              CHANCE. THE INFORMATION PROVIDED BY THE COMPANY SERVICES IS FOR
              RECREATION AND ENTERTAINMENT ONLY. Always PARTICIPATE Responsibly.
              INSTANT WIN LOTTERY TICKETS ARE NEVER A GOOD INVESTMENT. NEVER
              SPEND MORE MONEY ON THESE GAMES OF CHANCE THAN YOU CAN AFFORD TO
              LOSE. IF YOU SUSPECT YOU OR A LOVED ONE MIGHT HAVE A GAMBLING
              PROBLEM, CALL THE NATIONAL GAMBLING HELPLINE TO GET THE HLP YOU
              NEED: 1-800-522-4700.
            </li>
            <li>
              <strong>
                WARNING: IMPORTANT DISCLAIMER WITH RESPECT TO THE COMPANY
                SERVICES.
              </strong>
            </li>
            <li>
              Although the data presented through the company services have been
              produced and processed from sources believed to be reliable, no
              warranty, expressed or implied, is made by the regarding accuracy,
              adequacy, completeness, legality, reliability or usefulness of any
              information. This disclaimer applies to both isolated and
              aggregate uses of the information. the company provides this
              information on an “”as is”” basis and COMPANY assumeS no liability
              or responsibility for any errors or omissions in the content of
              the COMPANY SERVICES.
              {' '}
            </li>
            <li>
              THE COMPANY SERVICES, INCLUDING, WITHOUT LIMITATION, ALL CONTENT,
              SOFTWARE, AND FUNCTIONS MADE AVAILABLE ON OR ACCESSED THROUGH OR
              SENT FROM THE COMPANY SERVICES, ARE PROVIDED "AS IS," "AS
              AVAILABLE," AND "WITH ALL FAULTS." TO THE FULLEST EXTENT
              PERMISSIBLE BY LAW, THE COMPANY DISCLAIMS ANY REPRESENTATIONS OR
              WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER (EXPRESS OR
              IMPLIED) ABOUT: (A) THE COMPANY SERVICES; (B) THE CONTENT AND
              SOFTWARE ON AND PROVIDED THROUGH THE COMPANY SERVICES; (C) THE
              FUNCTIONS MADE ACCESSIBLE ON OR ACCESSED THROUGH THE COMPANY
              SERVICES; (D) THE MESSAGES AND INFORMATION SENT THROUGH THE
              COMPANY SERVICES BY USERS; (E) ANY PRODUCTS OR SERVICES OFFERED
              VIA THE COMPANY SERVICES OR HYPERTEXT LINKS TO THIRD PARTIES;
              AND/OR (F) SECURITY ASSOCIATED WITH THE TRANSMISSION OF SENSITIVE
              INFORMATION THROUGH THE COMPANY SERVICES OR ANY LINKED SITE. THE
              COMPANY DOES NOT WARRANT THAT THE COMPANY SERVICES, ANY OF THE
              COMPANY SERICES’ FUNCTIONS OR ANY CONTENT CONTAINED THEREIN WILL
              BE UNINTERRUPTED OR ERROR-FREE; THAT DEFECTS WILL BE CORRECTED; OR
              THAT THE COMPANY SERVICES OR THE SERVERS THAT MAKES THEM AVAILABLE
              ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              <br />
              All OTHER warranties of any kind, express or implied, including
              but not limited to implied warranties of merchantability, fitness
              for a particular purpose and non-infringement of proprietary
              rights are disclaimed.
            </li>
            <li>YOUR ACCOUNT REGISTRATION; YOUR ACCOUNT USE.</li>
            <li>
              <u>Your Account Registration.</u>
               If You create an account on any of the Company Services (a “User
              Account”) and submit information to Us, You must ensure that such
              information is accurate. You must promptly update such information
              if it changes.
            </li>
            <li>
              <u>Accounts are for Your Use Only.</u>
               You may not use anyone else’s account at any time. You may not
              buy, sell, rent, or lease access to Your User Account or Your
              username without Our written permission. You will not share or
              otherwise transfer Your User Account or credentials.
            </li>
            <li>
              <u>Security of Your Account.</u>
  You are entirely responsible for
              maintaining the confidentiality of Your password and account. You
              are entirely responsible for any and all activities that occur
              under Your account. You agree to notify Company immediately of any
              unauthorized use of Your account or any other breach of security.
              We will not be liable for any loss, damages, liability, expenses
              or attorneys’ fees that You may incur as a result of someone else
              using Your password or account, either with or without Your
              knowledge.
            </li>
            <li>
              <u>We Have No Obligation to Retain a Record of Your Account.</u>
               Company has no obligation to retain a record of Your account or
              any data or information that You may have stored for Your
              convenience by means of Your account or the Company Services. The
              Company Services are not intended for data storage. You are solely
              responsible for backing up your data.
            </li>
            <li>
              PRIVACY POLICY.  Our collection, use, and sharing of personal and
              other information about You is subject to Our Privacy Policy. You
              consent to the collection, retention, use, and sharing of this
              information as set forth in Our Privacy Policy.
            </li>
            <li>
              SERVICE MODIFICATIONS.  We reserve the right, at Our discretion,
              to modify, add, or discontinue the Company Services or any portion
              thereof, at any time, for any reason, and without liability to You
              except as provided in this Section 5. However, We reserve the
              right to make such modifications, additions, or discontinuances
              without such notice if needed to comply with law, protect or
              enforce legal rights, or otherwise to address or prevent an
              emergency. If We make material changes to the Premium Services
              that: (a) reduce the functionality available to You on such
              Premium Service and (b) are mandatory (i.e., do not require You to
              update the Company Software to become effective); You may
              terminate Your account accordingly within ten (10) days of such
              modifications (as provided in Section 10.b) and receive a pro-rata
              refund for any amounts pre-paid, but unused for such Premium
              Services. We reserve the right at any time to charge fees for
              access to all or portions of the Company Services and change any
              such pricing at any time provided that any changes will not affect
              the fees for any Premium Services that You have already paid for.
            </li>
            <li>
              OWNERSHIP; PROPRIETARY RIGHTS.  As between you and the Company (or
              any other person, governmental authority or other entity whose
              logo, name or marks appear on the Site), the Company (or the
              respective entity) is the owner and/or authorized user of any
              logo, name, registered or unregistered trademark, trade name
              and/or service mark appearing on the Site. The Company Services
              are owned and operated by Company. The Company Services, including
              Company content, visual interfaces, information, graphics, design,
              compilation, computer code, products, software, services,
              including the mobile device applications, and all other elements
              of the Company Services (collectively, the “Materials”) are
              protected by United States copyright, trade dress, patent, and
              trademark laws, international laws and conventions, and all other
              relevant intellectual property and proprietary rights, and
              applicable laws. All Materials contained in the Company Services
              are the property of Company or its subsidiaries or affiliated
              companies and/or third-party licensors. Except as expressly
              authorized by Company under this Agreement, You agree not to sell,
              license, distribute, copy, modify, publicly perform or display,
              transmit, publish, edit, adapt, create derivative works from, or
              otherwise use the Materials.
            </li>
            <li>
              GUIDELINES OF YOUR USE; USAGE RULES; PROHIBITED CONDUCT & USES.
            </li>
          </ul>
          <p>
            WE MAY DELETE YOUR SUBMISSIONS AND WE MAY BAN YOUR ACCOUNT. Company
            may require that You delete, or Company may delete, any User Content
            (as defined below) at any time for any reason, or no reason
            whatsoever. Any violation of this Agreement by Your User Content, as
            determined by Company, may result in Your User Account being banned
            and may lead to the termination of Your access to the Company
            Services.
            {' '}
          </p>
          <p>
            OU UNDERSTAND AND HEREBY ACKNOWLEDGE AND AGREE TO THE FOLLOWING
            TERMS REGARDING PROHIBITED CONDUCT AND USES LISTED BELOW:
          </p>

          <ul>
            <li>
              ou will NOT use the Company Services for any commercial or
              non-private use, such as the sale or advertisement of goods or
              services, and You will use the Company Services for personal,
              non-commercial, entertainment use only in the manner and for the
              purposes that We intend;
            </li>
            <li>
              You will NOT use the Company Services for the commission or
              encouragement of any illegal purpose, or in violation of any
              local, state, national, or international law, including laws
              governing gambling, criminal acts, prohibited or controlled
              substances, intellectual property and other proprietary rights,
              data protection and privacy, and import or export control;
            </li>
            <li>
              You will NOT make unsolicited offers, advertisements, proposals,
              or send junk mail to other Users of the Company Services. This
              includes unsolicited advertising, promotional materials or other
              solicitation material, bulk mailing of commercial advertising,
              chain mail, informational announcements, charity requests, and
              petitions for signatures, surveying or requests to participate in
              surveys or studies;
            </li>
            <li>
              ou will NOT misrepresent the source, identity or content of
              information transmitted via the Company Services;
            </li>
            <li>
              ou will NOT remove, circumvent, disable, damage or otherwise
              interfere with security-related features of the Company Services,
              features that prevent or restrict use or copying of any content
              accessible through the Company Services, or features that enforce
              limitations on use of the Company Services;
            </li>
            <li>
              You will NOT intentionally interfere with or damage operation of
              the Company Services or any User’s enjoyment of them, by any
              means, including uploading or otherwise disseminating viruses,
              worms, or other malicious code;
            </li>
            <li>
              You will NOT post, store, send, transmit, or disseminate any
              information or material which a reasonable person could deem to be
              objectionable, defamatory, libelous, offensive, obscene, indecent,
              pornographic, harassing, threatening, embarrassing, distressing,
              vulgar, hateful, racially or ethnically or otherwise offensive to
              any group or individual, intentionally misleading, false, or
              otherwise inappropriate, regardless of whether this material or
              its dissemination is unlawful;
            </li>
            <li>
              You will NOT post, store, send, transmit, or disseminate any
              information or material which infringes any patents, trademarks,
              trade secrets, copyrights, or any other rights of any person;
            </li>
            <li>
              You will NOT attempt to gain unauthorized access to the Company
              Services, or any part of it, other accounts, computer systems or
              networks connected to the Company Services, or any part of it,
              through hacking, password mining or any other means, or interfere
              or attempt to interfere with the proper working of the Company
              Services or any activities conducted on the Company Service;
            </li>
            <li>
              You will NOT probe, scan, or test the vulnerability of the Company
              Services or any system or network; use any robot, spider, scraper
              or other automated means to access the Company Services for any
              purpose without Our express written permission; bypass Our robot
              exclusion headers or other measures that We may use to prevent or
              restrict access to the Company Services; modify the Company
              Services in any manner or form; use or develop any application or
              other product that interacts with the Company Services or provides
              access to other Users’ content or information without Our written
              permission; or use modified versions of the Company Services,
              including for the purpose of obtaining unauthorized access to the
              Company Services;
            </li>
            <li>
              ou will NOT impersonate any person or entity, falsely claim an
              affiliation with any person or entity, or access the Company User
              Accounts of other Users;
            </li>
            <li>
              {' '}
              You will NOT include material in Your User Content which contains
              video, audio, photographs, or images of any person under the age
              of eighteen (18) with or without his or her permission, or any
              person over the age of eighteen (18) without his or her express
              permission;
            </li>
            <li>
              You will NOT use the Company Services or any information displayed
              within the Company Services to “stalk,” harass, abuse, defame,
              threaten or defraud other Users; violate the privacy or other
              rights of Users; or collect, attempt to collect, store, or
              disclose without permission the location or personal information
              about other Users;
            </li>
            <li>
              You will NOT include offensive or pornographic materials, or
              materials that are harmful in Your User Content; and
            </li>
            <li>
              You will NOT interfere with anyone’s ability to use or enjoy the
              Company Service, or aid or encourage any activity prohibited by
              this Agreement.
            </li>
            <li>PREMIUM SERVICES; PURCHASES. </li>
            <li>
              <u>Premium Services.</u>
              {' '}
              Certain Services may be available only
              through creation of a User Account and payment of a fee (“Premium
              Services”). Through such accounts, You will have access to such
              Premium Services for a fixed term, which will automatically renew.
              The term, renewal period, and the total cost of each Premium
              Services offering will be provided within the Company Services or
              otherwise where the Premium Services are offered.
            </li>
            <li>
              <u>PREMIUM SERVICES AUTOMATICALLY RENEW. </u>
              {' '}
 PREMIUM SERVICES
              AUTOMATICALLY RENEW CONTINUOUSLY AT THE END OF YOUR SUBSCRIPTION
              PERIOD, AND YOUR PAYMENT METHOD WILL BE CHARGED THE THEN-CURRENT
              RENEWAL PRICE (PLUS APPLICABLE TAXES) AUTOMATICALLY, WITHOUT ANY
              ADDITIONAL ACTION BY YOU. YOU ACKNOWLEDGE AND AGREE THAT THE
              PREMIUM SERVICES AUTOMATICALLY RENEW UNLESS YOU CANCEL THEM OR WE
              SUSPEND OR TERMINATE THEM IN ACCORDANCE WITH THIS AGREEMENT.
            </li>
            <li>
              <u>CANCELLATION POLICY.</u>
              {' '}
              YOU MAY CANCEL YOUR PREMIUM SERVICES
              AT ANY TIME, SUBJECT TO THE TERMS OF THIS AGREEMENT. IN ORDER TO
              CANCEL, YOU MUST FOLLOW THE INSTRUCTIONS GIVEN IN THE SERVICES.
              THERE ARE NO CANCELLATION FEES. INSTRUCTIONS FOR CANCELLING
              PREMIUM SERVICES MAY BE OBTAINED BY EMAIL REQUEST
              TO support@scratchshark.com.
            </li>
            <li>
              <u>Trial Premiums.</u>
               Access to Premium Services may from time to time be made
              available on a time-limited free trial basis (a “Trial” or “Trial
              Premiums”). Please note that this Agreement also applies to any
              Trial. You may be asked to provide Your credit or debit card
              information when registering for a Trial. In such event, Your
              credit or debit card will only be charged if You do not cancel
              Your Trial before the end of the Trial period. If We ask for Your
              credit or debit card information and You do not affirmatively
              cancel before the end of the Trial, then Your Trial may be
              converted into a paid subscription and Your credit or debit card
              may be charged the subscription fee in effect at the time Your
              Trial first began. Trial Premiums are not available to former
              Users of Premium Services or Users who have previously received a
              free trial and cancelled it prior to paying for Premium Services.
            </li>
            <li>
              <u>Purchases.</u>
               We reserve the right to correct errors (whether by changing
              information on the Premium Services or by informing You of the
              error and giving You an opportunity to cancel Your order) or to
              update information at any time without notice. We may grant or
              deny cancellation requests for individual orders in Our sole and
              absolute discretion. All sales are final.
            </li>
            <li>
              <u>Promo Codes.</u>
                We may, from time to time in Our sole discretion, offer certain
              promotional codes for discounts. Promotional codes are
              non-transferable and are not redeemable for cash, credit, or
              toward previous purchases. There is no cash alternative.
              Furthermore, promotional codes cannot be used in conjunction with
              any other offer or promotional discount, and must be redeemed by
              the date published, if provided. Lost promotional codes cannot be
              replaced. Limit one promotional code per customer. Promotional
              codes are void where prohibited. Any promotional program may be
              terminated or modified by us at any time in Our sole discretion.
            </li>
            <li>
              <u>Payments Are Non-Refundable.</u>
               Unless expressly provided otherwise in this Agreement (including
              Section 23 where You are a resident in certain states in the
              United States), any and all payments made to us are final and all
              charges are nonrefundable. Cancellations are effective the
              following billing period in which payment is due, except as
              otherwise expressly provided in this Agreement.
            </li>
            <li>
              <u>Taxes.</u>
               Unless specified otherwise at the time of purchase, all payments
              to us are exclusive of all taxes, levies, or duties imposed by
              taxing authorities, and You are responsible for payment of all
              such taxes, levies, or duties.
            </li>
            <li>
              YOUR USAGE.
              <ul>
                <li>
                  You acknowledge that some of the Company Services may only be
                  accessed by downloading the Company Software to a mobile
                  device.
                  {' '}
                </li>
                <li>
                  COMPANY RESERVES THE RIGHT, BUT HAS NO OBLIGATION, TO MONITOR
                  ANY USER’S USE OF THE COMPANY SERVICES, INCLUDING A USER’S
                  REGISTRATION OR MESSAGING. ACCORDINGLY, COMPANY ALSO RESERVES
                  THE RIGHT TO (A) DISABLE ANY USER’S USE OF OR ACCESS TO THE
                  COMPANY SERVICES, INCLUDING THE PROFILES OF OTHER USERS OR (B)
                  TERMINATE ANY USER’S ACCOUNT, FOR ANY REASON AND WITHOUT ANY
                  NOTICE OR OUR BEING LIABLE TO YOU. REFUNDS WILL ONLY BE GIVEN
                  WHERE EXPRESSLY PROVIDED IN THIS AGREEMENT.
                </li>
                <li>
                  You alone are responsible for Your involvement with other
                  Users and for all content and material that You provide to the
                  Company Services. You agree that Company will not be
                  responsible for any loss or damage incurred as the result of
                  any such interactions. Company reserves the right, but has no
                  obligation, to monitor disagreements between You and other
                  Users.
                </li>
                <li>
                  Company does not control the content of User Accounts and
                  profiles. Company has the right, but does not have any
                  obligation, to monitor such content for any purpose. You
                  acknowledge that You are solely responsible for all content
                  and material that You provide to the Company Services.
                </li>
              </ul>
            </li>
            <li>OUR REFUSAL OR SUSPENSION OF YOUR SERVICE.</li>
            <li className="list-style-n">
              <ul>
                <li>
                  You may terminate Your Account at any time for any reason, by
                  following the instructions given in the Company Services.
                </li>
                <li>
                  If You have a User Account set up for recurring billing for a
                  Premium Service, You may cancel Your User Account at any time.
                  You will continue to have the same access for any billing
                  period or periods for which You have paid.
                </li>
                <li>
                  Company may suspend or terminate any User Account You have
                  with the Company Services or Your access to or use of the
                  Company Services or any portion thereof, if Company believes
                  that Your profile content or Your conduct within the Company
                  Services violates Our Terms of Service or you have otherwise
                  breached this Agreement, or for any other reason, in its sole
                  discretion. Company may also remove and discard all or any
                  part of Your User Account or any User Content (as defined
                  below), at any time. You agree that any termination of Your
                  access to the Company Services or any User Account You may
                  have or portion thereof may be effected without prior notice,
                  and You agree that Company will not be liable to You or any
                  third party for any such termination and refunds will only be
                  given where expressly provided in this Agreement. Without
                  limitation of Our other rights, We reserve the right to delete
                  all Your User Content from the Company Services upon any
                  termination or cancellation of Your User Account. Any
                  suspected fraudulent, abusive or illegal activity that may be
                  grounds for termination of Your use of the Company Services
                  may be referred to appropriate law enforcement authorities.
                  These remedies are in addition to any other remedies Company
                  may have at law or in equity.
                </li>
                <li>
                  If you have paid for a Premium Service, Company will give you
                  at least 30 days’ notice of termination of Your access to the
                  Company Services or any User Account unless Your profile
                  content or Your conduct within the Company Services violates
                  Our Terms of Service or You have otherwise breached this
                  Agreement, in which case Company may suspend or terminate Your
                  access to the Company Services or any User Account
                  immediately.
                </li>
                <li>
                  If You have paid for a Premium Service and Company terminates
                  Your access to the Company Services or any user Account,
                  Company will give a pro-rata refund for any amounts pre-paid,
                  but unused for such Premium Services; provided that if Company
                  terminates Your access to the Company Services or any User
                  Account because You have violated Our Terms of Service,
                  Company will be entitled to retain the amounts that You paid
                  for the Company Services (except that, where required by law,
                  Company will only retain an amount to cover all costs and
                  other losses it incurs as a result of the violation or breach,
                  which may still mean that no refund is payable).
                </li>
                <li>
                  You acknowledge and agree that Google, Apple, or another
                  third-party platform provider (as applicable, based on the
                  device and operating system You use) may be the merchant of
                  record for transactions involving the Company Services. As
                  such, you may need to request any refund to which You are
                  entitled under this Agreement through the App Store, Google
                  Play, or other third-party platform (as applicable).
                </li>
                <li>
                  If You believe that Company has suspended or terminated Your
                  User Account in error, You may contact Us at
                  support@scratchshark.com at any time.
                </li>
              </ul>
            </li>
            <li>
              <strong>USER CONTENT.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  The Company Services allow the submission of content and
                  materials (such as pictures, ideas, notes, concepts, or
                  creative suggestions) by You and other Users to Company and
                  other Users (“User Content”), and the hosting, sharing and/or
                  publishing of such User Content with Company and other Users.
                </li>
                <li>
                  You are solely responsible for Your own User Content and the
                  consequences of posting or publishing them. In connection with
                  User Content, You represent and warrant that: (i) You own, or
                  have the necessary licenses, rights, consents, and permissions
                  to use, and authorize Company to use, all intellectual
                  property and any other proprietary rights in and to any and
                  all User Content to enable inclusion and use of the User
                  Content in the manner contemplated by the Company Services and
                  this Agreement; and (ii) You have the written consent,
                  release, and/or permission of each and every identifiable
                  individual person in the User Content to use the name or
                  likeness of each and every such identifiable individual person
                  to enable inclusion and use of the User Content in the manner
                  contemplated by the Company Services and this Agreement. For
                  clarity, You shall retain all of Your ownership rights in Your
                  User Content.
                </li>
                <li>
                  You understand that when using the Company Services, You will
                  be exposed to User Content from a variety of sources, and that
                  Company is not responsible for the accuracy, usefulness,
                  safety, or intellectual property rights of or relating to such
                  User Content. You further understand and acknowledge that You
                  may be exposed to User Content that is inaccurate, offensive,
                  indecent or objectionable.
                </li>
                <li>
                  Company assumes no responsibility whatsoever in connection
                  with or arising from User Content. Company assumes no
                  responsibility for actively monitoring User Content for
                  inappropriate content. If at any time Company chooses, in its
                  sole discretion, to monitor User Content, Company nonetheless
                  assumes no responsibility for the content of the User Content,
                  no obligation to modify or remove any inappropriate User
                  Content, and no responsibility for the conduct of the User
                  submitting User Content. Further, Company does not endorse and
                  has no control over the content of User Content submitted by
                  other Users. Company makes no warranties, express or implied,
                  as to the content of User Content or the accuracy and
                  reliability of any User Content. Nonetheless, Company reserves
                  the right to prevent You from submitting User Content and to
                  edit, restrict or remove User Content for any reason at any
                  time.
                </li>
                <li>
                  User Content is owned by the User who submitted it, subject to
                  Company’s license to such User Content under this Agreement.
                  You may not share, display or duplicate the User Content of
                  any other party, except as permitted under this Agreement.
                </li>
                <li>
                  You hereby grant, and You represent and warrant that You have
                  the right to grant, to Company an irrevocable, nonexclusive,
                  royalty-free and fully paid worldwide license to reproduce,
                  distribute, publicly display and perform, prepare derivative
                  works of, incorporate into other works, and otherwise use and
                  exploit Your User Content, (through unlimited tiers of
                  sublicenses), solely for the purposes of including Your User
                  Content in the Company Services and as otherwise permitted by
                  this Agreement. You agree to irrevocably waive (and cause to
                  be waived) any claims and assertions of moral rights or
                  attribution with respect to Your User Content. You also hereby
                  grant to Company, in connection with a sale of Company or the
                  assets of Company, the right to sell or transfer the User
                  Content to a third party. Please see Our Privacy Policy for
                  additional information about the use, collection, or sharing
                  of Your information, including User Content.
                </li>
                <li>
                  If You provide Company with any feedback or suggestions
                  regarding the Company Services (“Feedback”), You hereby grant
                  Company the perpetual, irrevocable, worldwide license (with
                  the right to sublicense) to use such Feedback and related
                  information in any manner it deems appropriate. Company will
                  treat any Feedback You provide to Company as non-confidential
                  and non-proprietary to You. Company will have no obligation
                  under any circumstances to compensate You for any Feedback.
                  You agree that You will not submit to Company any information
                  or ideas that You consider to be confidential or proprietary,
                  or for which You expect to be compensated.
                </li>
              </ul>
            </li>
            <li>
              <strong>THIRD-PARTY SITES, PRODUCTS AND SERVICES; LINKS.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  The Company Services may include links to other web sites or
                  services, whether through advertising or otherwise,
                  (“Third-Party Websites”) solely as a convenience to Users.
                  Company does not endorse any such linked sites or the
                  information, material, products or services contained on other
                  linked sites or accessible through other linked sites.
                  Furthermore, Company makes no express or implied warranties
                  with regard to the information, material, products or services
                  that are contained on or accessible through linked sites.
                  Access and use of linked sites, including information,
                  material, products and services on linked sites or available
                  through linked sites is solely at Your own risk. We do not
                  control these Third-Party Websites and this Agreement does not
                  apply to companies that Company does not own or control, or to
                  the actions of people that Company does not employ or manage.
                  You should always check the terms of use posted on Third-Party
                  Websites.
                </li>
                <li>
                  Your correspondence or business dealings with, or
                  participation in promotions of, advertisers found on or
                  through the Company Services are solely between You and such
                  advertiser. You agree that Company will not be responsible or
                  liable for any loss or damage of any sort incurred as the
                  result of any such dealings or as the result of the presence
                  of such advertisers on the Company Services.
                </li>
                <li>
                  Parties other than Company may provide services or sell
                  products via the Company Services. We are not responsible for
                  examining or evaluating, and We do not warrant the offerings
                  of, any of these businesses or the content of their product
                  and service offerings. Company does not assume any
                  responsibility or liability for the actions, product, and
                  content of all these and any other third parties. You should
                  carefully review the third parties’ privacy statements and
                  other terms and conditions of use.
                </li>
                <li>
                  By Your use of third-party applications that connect with the
                  Company Services (“Third-Party Applications”), You acknowledge
                  and agree that Company may transmit User Content to
                  Third-Party Websites or Third-Party Applications through
                  application protocol interfaces developed and maintained by
                  those Third-Party Websites or Third-Party Applications.
                  Company is not responsible for the transmission of the User
                  Content from the Company Services to Third-Party Websites or
                  Third-Party Applications, nor the use of the User Content on
                  any Third-Party Websites or Third-Party Applications. You
                  should review the terms of service and privacy policies of any
                  Third-Party Websites or Third-Party Applications. Company is
                  not responsible for and does not endorse any features,
                  content, or other materials on or available from Third-Party
                  Sites or Third-Party Applications. Company also does not
                  screen, audit, or endorse Third-Party Sites or Third-Party
                  Applications. Accordingly, if You decide to access Third-Party
                  Sites or Third-Party Applications, You do so at Your own risk
                  and agree that Your use of any Third-Party Sites or
                  Third-Party Applications is on an “as-is” basis without any
                  warranty as to the Third-Party Sites or Third-Party
                  Applications’ actions, and that this Agreement does not apply
                  to Your use of any Third-Party Sites or Third-Party
                  Applications.
                </li>
                <li>
                  You acknowledge and agree that Company may incorporate Your
                  User Content and location information for User Accounts from
                  the Company Services with third-party information sources and
                  third-party applications in the provisioning of the Company
                  Services.
                </li>
                <li>
                  To the extent that any of Your User Content contains Your
                  personal information, any transfer of such personal
                  information will be subject to the Privacy Policy.
                </li>
              </ul>
            </li>
            <li>
              <strong>ADVERTISING</strong>
              .  Company and its licensees may publicly display advertisements
              and other information adjacent to Your Content. You are not
              entitled to any compensation for such advertisements. The manner,
              mode and extent of such advertising are subject to change without
              specific notice or Our being liable to You.
            </li>
            <li>
              <strong>END USER LICENSES.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  <u>Mobile Device.</u>
                  {' '}
 To use the Company Software, You must
                  have a mobile device that is compatible with the Company
                  Services. Company does not warrant that the Company Services
                  will be compatible with Your mobile device. You are
                  responsible for any mobile charges that You may incur for
                  using the Company Services, including text-messaging, roaming
                  charges, and data charges. If You are unsure about the charges
                  that will apply, please contact Your mobile service provider
                  before using the Company Services.
                </li>
                <li>
                  <u>License Grant.</u>
                    Subject to Your compliance with the terms of this Agreement,
                  Company hereby grants You a non-exclusive, non-transferable,
                  revocable license to (i) use a compiled code copy of the
                  Company Software for Your Account on a mobile device owned or
                  leased solely by You, for Your personal, noncommercial use and
                  (ii) use the Company Services (other than the Company
                  Software) for Your personal, noncommercial use for the use
                  intended by Company, as publicly communicated by Company from
                  time to time.
                </li>
                <li>
                  <u>Restrictions.</u>
                  {' '}
                  You may NOT: (i) modify, disassemble,
                  decompile or reverse engineer the Company Services or any
                  technology made available in connection with the Company
                  Services, except to the extent that such restriction is
                  expressly prohibited by law without possibility of contractual
                  waiver; (ii) rent, lease, loan, resell, sublicense, distribute
                  or otherwise transfer the Company Services to any third party
                  or use the Company Services to provide time sharing or similar
                  services for any third party; (iii) make any copies of the
                  Company Services; (iv) remove, circumvent, disable, damage or
                  otherwise interfere with security-related features of the
                  Company Services, features that prevent or restrict use or
                  copying of any content accessible through the Company
                  Services, or features that enforce limitations on use of the
                  Company Services; or (v) create extensions of, products
                  related to, or that interoperate with, the Company Services,
                  except to the extent that such restriction is expressly
                  prohibited by law without possibility of contractual waiver;
                  or (vi) delete the copyright and other proprietary rights
                  notices on the Company Services.
                </li>
                <li>
                  <u>Upgrades.</u>
                   You acknowledge that Company may from time to time issue
                  upgraded versions of the Company Services, and may
                  automatically electronically upgrade the version of the
                  Company Services that You are using on Your mobile device or
                  otherwise. You consent to such automatic upgrading on Your
                  mobile device, and agree that the terms and conditions of this
                  Agreement will apply to all such upgrades. You agree that
                  Company will not be liable to You for any such upgrades.
                </li>
                <li>
                  <u>Open Source.</u>
                   To the extent that the Company Services utilize any open
                  source or third-party code that may be incorporated in the
                  Company Services, such open source or third-party code is
                  covered by the applicable open source or third-party license
                  EULA, if any, authorizing use of such code. Nothing in this
                  Agreement limits Your rights under, or grants You rights that
                  supersede, the terms and conditions of any applicable end user
                  license for such open source software.
                </li>
                <li>
                  <u>Rights Reserved.</u>
                  {' '}
                  The foregoing license granted under
                  this Agreement is not a sale of the Company Services or any
                  copy thereof and Company or its third-party partners or
                  suppliers retain all right, title, and interest in the Company
                  Services (and any copy thereof). Any attempt by You to
                  transfer any of the rights, duties or obligations hereunder,
                  except as expressly provided for in this Agreement, is void.
                  Company reserves all rights not expressly granted under this
                  Agreement.
                </li>
                <li>
                  <u>Trademarks, Service Marks and Logos.</u>
                   The names and logos associated with the Company Services are
                  the property of Company. No use of these marks is permitted
                  except through the prior written authorization and permission
                  of Company. All rights reserved.
                </li>
                <li>
                  <u>Government End Users.</u>
                   The Company Services are intended for the use by individuals,
                  not government entities. If Company authorizes the use of the
                  Company Services on behalf of the United States Government or
                  the United States Government uses the Company Service without
                  authorization, then use, duplication, display, modification,
                  reproduction, release, performance, distribution and
                  disclosure of the Company Services (or portion thereof) by the
                  U.S. Government is subject to restrictions set forth in this
                  Agreement and as provided in DFARS 227.7202-1(a) and
                  227.7202-3(a) (1995), DFARS 252.227-7013(c)(1)(ii) (OCT 1988),
                  FAR 12.212(a) (1995), FAR 52.227-19, or FAR 52.227-14 (ALT
                  III), as applicable. Otherwise, nothing in this Agreement or
                  otherwise will give a government user rights to the Company
                  Services broader than those set forth in this Agreement.
                </li>
                <li>
                  <u>Export Control.</u>
                  {' '}
                  The Company Services originate in the
                  United States and are subject to United States export laws and
                  regulations. The Company Services may not be exported or
                  re-exported by You to certain countries or those persons or
                  entities prohibited from receiving exports from the United
                  States. In addition, the Company Services may be subject to
                  the import and export laws of other countries. You agree to
                  comply with all United States and foreign laws related to use
                  of the Company Services.
                </li>
                <li>
                  <u>App Stores.</u>
                   You acknowledge and agree that the availability of the
                  Company Services is dependent on the third party from which
                  You received the Company Services, e.g., the Android Market or
                  Apple app store (each, an “App Store”). You acknowledge that
                  this Agreement is between You and Company and not with the App
                  Store. Each App Store may have its own terms and conditions to
                  which You must agree before downloading the Company Services
                  from it. You agree to comply with, and Your license to use the
                  Company Services is conditioned upon Your compliance with, all
                  applicable terms and conditions of the applicable App Store.
                </li>
              </ul>
            </li>
            <li>
              <strong>ADDITIONAL DISCLAIMERS.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  COMPANY AND ITS SUPPLIERS AND LICENSORS (INCLUDING COMPANY’S
                  THIRD-PARTY WIRELESS CARRIER LICENSORS) DO NOT WARRANT OR MAKE
                  ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE
                  USE OF ANY LOCATION INFORMATION OR THE OTHER COMPANY SERVICES
                  IN TERMS OF SECURITY, SAFETY, CORRECTNESS, ACCURACY,
                  RELIABILITY, OR OTHERWISE. YOU (AND NOT COMPANY OR ITS
                  SUPPLIERS OR LICENSORS) ASSUME THE ENTIRE COST OF ANY
                  NECESSARY SERVICES OR EQUIPMENT NECESSARY TO ACCESS THE
                  COMPANY SERVICES. YOU UNDERSTAND AND AGREE THAT YOU DOWNLOAD
                  OR OTHERWISE OBTAIN MATERIAL OR DATA THROUGH THE USE OF THE
                  COMPANY SERVICES AT YOUR OWN DISCRETION AND RISK.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                YOUR INDEMNIFICATION OF US; YOU HOLD COMPANY HARMLESS.
              </strong>
              You agree to indemnify, defend, and hold Company (and its
              affiliated companies, contractors, employees, agents, and
              suppliers and licensors) harmless from any and all claims, suits,
              actions, losses, costs, damages, and any other liabilities,
              including attorneys’ fees, brought by a third party arising out of
              or related to (a) Your use or misuse of any location information
              or the other Company Services generally, (b) any violation of the
              rights of any other person or entity by You, (c) any alleged
              breach or violation by You of this Agreement, or (d) Your use of
              the Company Services to meet another User in person or to locate
              and attend any offline place or event. Company reserves the right,
              at Your expense, to assume the exclusive defense and control of
              any matter for which You are required to indemnify Us, and You
              agree to cooperate with Our defense of these claims. This defense
              and indemnification obligation is intended to extend to the
              fullest extent permitted by law and will survive this Agreement
              and Your use of the Company Services.
            </li>
            <li>
              <strong>LIMITATION OF OUR LIABILITY AND OF YOUR DAMAGES.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  CERTAIN STATE, PROVINCIAL, AND NATIONAL LAWS DO NOT ALLOW
                  LIMITATIONS ON LIABILITY. IF THESE LAWS APPLY TO YOU, SOME OR
                  ALL OF THE PROVISIONS BELOW MAY NOT APPLY TO YOU. PLEASE REFER
                  TO THE SPECIAL TERMS FOR CERTAIN EXCEPTIONS FOR SUCH USERS.
                </li>
                <li>
                  YOU ACKNOWLEDGE AND AGREE THAT, TO THE FULLEST EXTENT
                  PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES, INCLUDING
                  NEGLIGENCE, WILL COMPANY (WHICH INCLUDES, FOR PURPOSES OF THIS
                  SECTION 17, ITS AFFILIATES, CONTRACTORS, EMPLOYEES, AGENTS, OR
                  THIRD-PARTY LICENSORS OR SUPPLIERS) BE LIABLE TO YOU FOR ANY
                  SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, RELIANCE,
                  CONSEQUENTIAL, OR EXEMPLARY DAMAGES RELATED TO OR RESULTING
                  FROM: (A) YOUR USE OF THE COMPANY SERVICES; (B) OUR
                  DISCLOSURE, DISPLAY, OR MAINTENANCE OF YOUR LOCATION
                  INFORMATION; (C) YOUR USE OR INABILITY TO USE THE COMPANY
                  SERVICES; (D) THE COMPANY SERVICES GENERALLY (INCLUDING THE
                  COMPANY SOFTWARE) OR SYSTEMS THAT MAKE THE COMPANY SERVICES
                  AVAILABLE; OR (E) ANY OTHER INTERACTIONS WITH COMPANY OR ANY
                  OTHER USER OF THE COMPANY SERVICES, EVEN IF COMPANY OR A
                  COMPANY AUTHORIZED REPRESENTATIVE HAS BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES. YOU AGREE THAT THE LIMITATIONS OF
                  LIABILITY SET FORTH IN THIS SECTION WILL SURVIVE ANY
                  TERMINATION OR EXPIRATION OF THIS AGREEMENT AND, TO THE EXTENT
                  PERMITTED BY LAW, WILL APPLY EVEN IF ANY LIMITED REMEDY
                  SPECIFIED HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL
                  PURPOSE.
                </li>
                <li>
                  IN NO EVENT SHALL COMPANY’S (OR ITS AFFILIATES’, CONTRACTORS’,
                  EMPLOYEES’, AGENTS’, SUPPLIERS’, OR THIRD-PARTY LICENSORS’ OR
                  SUPPLIERS’) TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES,
                  AND CAUSES OF ACTION ARISING OUT OF OR RELATING TO THIS
                  AGREEMENT OR YOUR USE OF THE COMPANY SERVICES (WHETHER IN
                  CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY, OR OTHERWISE)
                  EXCEED THE AMOUNTS PAID BY YOU FOR ACCESSING THE COMPANY
                  SERVICES DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING
                  THE DATE OF YOUR CLAIM OR FIFTY DOLLARS, WHICHEVER IS GREATER.
                </li>
                <li>
                  THIS SECTION 17 IS NOT INTENDED TO EXCLUDE LIABILITY THAT
                  COMPANY MAY NOT EXCLUDE UNDER APPLICABLE LAW.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                YOU ACKNOWLEDGE THE BENEFIT OF THE BARGAIN WITH COMPANY.
              </strong>
               YOU ACKNOWLEDGE AND AGREE THAT COMPANY HAS OFFERED THE COMPANY
              SERVICES, SET ITS PRICES, AND ENTERED INTO THIS AGREEMENT IN
              RELIANCE UPON THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF
              LIABILITY SET FORTH ABOVE. YOU FURTHER ACKNOWLEDGE AND AGREE THAT
              THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET
              FORTH IN THIS AGREEMENT REFLECT A REASONABLE AND FAIR ALLOCATION
              OF RISK BETWEEN YOU AND COMPANY, AND THAT THE WARRANTY DISCLAIMERS
              AND THE LIMITATIONS OF LIABILITY SET FORTH IN THIS AGREEMENT FORM
              AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND COMPANY. COMPANY
              WOULD NOT BE ABLE TO PROVIDE THE COMPANY SERVICES TO YOU ON AN
              ECONOMICALLY REASONABLE BASIS WITHOUT THESE LIMITATIONS AND
              DISCLAIMERS.
            </li>
            <li>
              <strong>YOU RELEASE US.</strong>
               To the fullest extent permitted by applicable law, You hereby
              release and forever discharge Us (and Our officers, employees,
              agents, successors, and assigns) from, and hereby waive and
              relinquish, each and every past, present and future dispute,
              claim, controversy, demand, right, obligation, liability, action
              and cause of action of every kind and nature (including personal
              injuries, emotional distress, identity theft, death, and property
              loss and damage), that has arisen or arises directly or indirectly
              out of, or relates directly or indirectly to, (1) any interactions
              with, or act or omission of, or User Content provided by, other
              Company Services Users or (2) any third-party site, products,
              services, and links included on or accessed through the Company
              Service.
            </li>
            <li>
              <strong>RESOLVING OUR DISPUTES; AGREEMENT TO ARBITRATE.</strong>
                You and Company agree that any dispute that has arisen or may
              arise between us relating in any way to Your use of or access to
              the Company Services, any validity, interpretation, breach,
              enforcement, or termination of this Agreement, or otherwise
              relating to Company in any way (collectively, “Covered Dispute
              Matters”) will be resolved in accordance with the provisions set
              forth in this Section 20.
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  <u>Informal Resolution.</u>
                   If You have any dispute with Us, You and We agree that before
                  taking any formal action, You will contact Us
                  at legal@scratchshark.com and provide a brief, written
                  description of the dispute and Your contact information
                  (including Your email address associated with Your User
                  Account, if Your dispute relates to an account) and allow
                  sixty (60) days to pass, during which We will attempt to reach
                  an amicable resolution of any issue with You.
                </li>
                <li>
                  <u>Applicable Law.</u>
                    You and We agree that United States federal law including
                  the Federal Arbitration Act, and (to the extent not
                  inconsistent with or pre-empted by federal law) the laws of
                  the State of New York, USA, without regard to any of its
                  conflict of laws principles that would require the application
                  of the laws of another jurisdiction, will govern all Covered
                  Dispute Matters.
                </li>
                <li>
                  <u>Our Arbitration.</u>
                   You and We agree that this Agreement and each of its parts
                  evidence a transaction involving interstate commerce, and the
                  Federal Arbitration Act applies in all cases and governs the
                  interpretation and enforcement of the arbitration rules and
                  arbitration proceedings. Any Covered Dispute Matter must be
                  asserted individually in binding arbitration administered by
                  the American Arbitration Association (“AAA”) in accordance
                  with its Consumer Arbitration Rules (including utilizing desk,
                  phone or video conference proceedings where appropriate and
                  permitted to mitigate costs of travel). You and We agree that
                  the arbitrator shall not conduct any form of class or
                  collective arbitration nor join or consolidate claims by or
                  for individuals. You and We agree that the arbitrator, and not
                  any federal, international, state, or local court or agency,
                  shall have exclusive authority to resolve any dispute relating
                  to the interpretation, applicability, enforceability or
                  formation of this Agreement, including any claim that all or
                  any part of this Agreement is void or voidable or a particular
                  claim is subject to arbitration. You and We agree that
                  judgment on the award rendered by the arbitrator may be
                  entered in any court of competent jurisdiction.
                </li>
                <li>
                  <u>The Arbitrator’s Award to You or Us.</u>
                   You and We agree that for matters where the relief sought is
                  over $5,000, the arbitrator’s decision will include the
                  essential findings and conclusions upon which the arbitrator
                  based the award. The arbitrator will decide the substance of
                  all claims in accordance with applicable law, including
                  recognized principles of equity, and will honor all claims of
                  privilege recognized by law. The arbitrator shall not be bound
                  by rulings in prior arbitrations involving different Users,
                  but is bound by rulings in prior arbitrations involving the
                  same Company User to the extent required by applicable law.
                  You and We agree that the arbitrator’s award shall be final
                  and binding, and judgment on the award rendered by the
                  arbitrator may be entered in any court having jurisdiction
                  thereof.
                </li>
                <li>
                  <u>Injunctive and Declaratory Relief.</u>
                   Except as provided in Section 20.f below, the arbitrator
                  shall determine all issues of liability on the merits of any
                  claim asserted by You or Company and may award declaratory or
                  injunctive relief only in favor of the individual party
                  seeking relief and only to the extent necessary to provide
                  relief warranted by that party's individual claim. To the
                  extent that You or Company have sought public injunctive
                  relief (that is, injunctive relief that has the primary
                  purpose and effect of prohibiting unlawful acts that threaten
                  future injury to the public), the entitlement to and extent of
                  such relief must be litigated in a civil court of competent
                  jurisdiction and not in arbitration after the party seeking
                  public injunctive relief has first prevailed in arbitration.
                  The parties agree that the litigation of any issues of public
                  injunctive relief shall be stayed pending the outcome of the
                  merits of any individual claims in arbitration.
                </li>
                <li>
                  <u>Exceptions To Our Agreement To Arbitrate Disputes.</u>
                    There are only two exceptions to this agreement to
                  arbitrate:
                </li>
                <li>
                  <ul>
                    <li>
                      First, if either party reasonably believes that the other
                      party has in any manner violated or threatened to infringe
                      the intellectual property rights of the other party, the
                      party whose rights have been violated may seek injunctive
                      or other appropriate interim relief in any court of
                      competent jurisdiction.
                    </li>
                    <li>
                      Second, each party will retain the right to seek relief in
                      a small claims court for disputes or claims within the
                      scope of the jurisdiction of such courts.
                    </li>
                  </ul>
                </li>
                <li>
                  <u>Who Bears the Costs of Arbitration.</u>
                    You and We agree that payment of all filing, administration,
                  and arbitrator fees will be governed by the AAA’s rules,
                  unless otherwise stated in this agreement to arbitrate.
                </li>
                <li>
                  <u>Future Amendments to the Agreement to Arbitrate.</u>
                    Notwithstanding any provision in this Agreement to the
                  contrary, You and We agree that if We make any amendment to
                  this agreement to arbitrate in the future, that amendment
                  shall not apply to any claim that was filed in a legal
                  proceeding against Company prior to the effective date of the
                  amendment. However, the amendment shall apply to all other
                  disputes or claims governed by the agreement to arbitrate that
                  have arisen or may arise between You and Company. If You do
                  not agree to these amended terms, You may close Your account
                  within thirty (30) days of the posting or notification and You
                  will not be bound by the amended terms.
                </li>
                <li>
                  <u>Judicial Forum for Legal Disputes.</u>
                    Unless You and We agree otherwise and except as described in
                  Section 20.f (Small Claims Court), in the event that the
                  agreement to arbitrate above is found not to apply to You or
                  to a particular claim or dispute, either as a result of Your
                  decision to opt out of the agreement to arbitrate, as a result
                  of a decision by the arbitrator or a court order, You agree
                  (except as otherwise provided by law) that any claim or
                  dispute that has arisen or may arise between You and Company
                  must be resolved exclusively by a state or federal court
                  located in Norfolk County, Massachusetts. You and Company
                  agree to submit to the exclusive personal jurisdiction of the
                  courts located within Norfolk County, Massachusetts for the
                  purpose of litigating all such claims or disputes.
                </li>
                <li>
                  <u>YOU MAY OPT-OUT OF ARBITRATION.</u>
                    IF YOU ARE A NEW COMPANY USER, YOU CAN CHOOSE TO REJECT THE
                  AGREEMENT TO ARBITRATE PROVISION (“OPT-OUT”) BY EMAILING US AN
                  OPT-OUT NOTICE TO LEGAL@SCRATCHSHARK.COM (“OPT-OUT NOTICE”).
                  THE OPT-OUT NOTICE MUST BE RECEIVED NO LATER THAN THIRTY (30)
                  DAYS AFTER THE DATE YOU ACCEPT THE TERMS OF THIS AGREEMENT FOR
                  THE FIRST TIME. IF YOU ARE NOT A NEW COMPANY USER, YOU HAVE
                  UNTIL THIRTY (30) DAYS AFTER THE POSTING OF THE NEW TERMS TO
                  SUBMIT AN ARBITRATION OPT-OUT NOTICE.
                </li>
                <li>
                  <u>Arbitration Opt-Out Procedure.</u>
                   In order to opt-out, You must email Your name, address
                  (including street address, city, state, and zip code), email
                  address(es) associated with Your Account(s) to which the
                  opt-out applies, and an unaltered digital image of Your valid
                  driver’s license to: legal@scratchshark.com. This procedure is
                  the only way You can opt out of the agreement to arbitrate. If
                  You opt out of the agreement to arbitrate, all other parts of
                  this Agreement and this Disputes Section will continue to
                  apply to You. Opting out of this agreement to arbitrate has no
                  effect on any previous, other, or future arbitration
                  agreements that You may have with Us.
                </li>
                <li>
                  <u>YOU WAIVE CERTAIN RIGHTS.</u>
                    BY AGREEING TO THIS AGREEMENT, YOU HEREBY IRREVOCABLY WAIVE
                  ANY RIGHT YOU MAY HAVE (i) TO A COURT TRIAL (OTHER THAN SMALL
                  CLAIMS COURT AS PROVIDED ABOVE), (ii) TO SERVE AS A
                  REPRESENTATIVE, AS A PRIVATE ATTORNEY GENERAL, OR IN ANY OTHER
                  REPRESENTATIVE CAPACITY, OR TO PARTICIPATE AS A MEMBER OF A
                  CLASS OF CLAIMANTS, IN ANY LAWSUIT, ARBITRATION OR OTHER
                  PROCEEDING FILED AGAINST US AND/OR RELATED THIRD PARTIES, EVEN
                  IF ARBITRATION IS NOT REQUIRED UNDER THIS AGREEMENT, AND (iii)
                  TO A TRIAL BY JURY.
                </li>
                <li>
                  <u>STATUTE OF LIMITATIONS FOR YOUR CLAIMS.</u>
                   REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM
                  OR CAUSE OF ACTION ARISING OUT OF OR RELATED TO USE OF THE
                  SITE, SERVICES, OR THIS AGREEMENT MUST BE FILED WITHIN ONE (1)
                  YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION ARISES OR IT WILL BE
                  FOREVER BARRED.
                </li>
              </ul>
            </li>
            <li>
              <strong>COPYRIGHT NOTICE AND TAKEDOWN POLICY.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  Company respects intellectual property rights and expects its
                  Users to do the same. Company will promptly terminate without
                  notice the accounts of Users that are determined by Company to
                  be “repeat infringers.” A repeat infringer is a User who has
                  been notified by Company of infringing activity violations
                  more than twice and/or who has had a User Content removed from
                  the Company Services more than twice. (Note that we reserve
                  the right to terminate accounts for a single infringement as
                  well pursuant to Section 7).
                </li>
                <li>
                  If You are a copyright owner or an agent thereof, and You
                  believe that any content hosted on any Company Services
                  infringes Your copyrights, then You may submit a notification
                  by providing Company’s Designated Copyright Agent with the
                  following information in writing:
                </li>
                <li>
                  <ul>
                    <li>
                      A physical or electronic signature of a person authorized
                      to act on behalf of the owner of an exclusive right that
                      is allegedly infringed;
                    </li>
                    <li>
                      Identification of the copyrighted work claimed to have
                      been infringed, or, if multiple copyrighted works on the
                      applicable Company Services are covered by a single
                      notification, a representative list of such works on the
                      applicable Company Services;
                    </li>
                    <li>
                      Identification of the material that is claimed to be
                      infringing or to be the subject of infringing activity and
                      that is to be removed or access to which is to be
                      disabled, and information reasonably sufficient to permit
                      Company to locate the material;
                    </li>
                    <li>
                      Information reasonably sufficient to permit Company to
                      contact the complaining party, such as an address,
                      telephone number, and, if available, an email address at
                      which the complaining party may be contacted;
                    </li>
                    <li>
                      A statement that the complaining party has a good faith
                      belief that use of the material in the manner complained
                      of is not authorized by the copyright owner, its agent, or
                      the law (for example, “I am under the good faith belief
                      that the use of the copyrighted content that is identified
                      herein is not authorized by the copyright owner, its
                      agent, or the law.”); and
                    </li>
                    <li>
                      A statement that the information in the notification is
                      accurate, and under penalty of perjury, that the
                      complaining party is authorized to act on behalf of the
                      owner of an exclusive right that is allegedly infringed
                      (for example, “I swear, under penalty of perjury, that the
                      information in this notification is accurate and that I am
                      the copyright owner, or authorized to act on behalf of the
                      copyright owner, of the copyright(s) that is allegedly
                      infringed by the aforementioned content.”).
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>APPLE APP STORE ADDITIONAL TERMS AND CONDITIONS.</strong>
               The following additional terms and conditions apply to You if You
              are using Company Software from the Apple App Store. To the extent
              the other terms and conditions of this Agreement are less
              restrictive than, or otherwise conflict with, the terms and
              conditions of this Section 22, the more restrictive or conflicting
              terms and conditions in this Section 22 apply, but solely with
              respect to Company Software from the Apple App Store:
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  <u>Acknowledgement.</u>
                   Company and You acknowledge that this Agreement is concluded
                  between Company and You only, and not with Apple, and that
                  Company, not Apple, is solely responsible for Company Software
                  and the content thereof. To the extent this Agreement provides
                  for usage rules for Company Software that are less restrictive
                  than the Usage Rules set forth for Company Software in, or
                  otherwise is in conflict with, the Apple App Store Terms of
                  Service, the more restrictive or conflicting Apple term
                  applies.
                </li>
                <li>
                  <u>Scope of License.</u>
                   The license granted to You for Company Software is limited to
                  a non-transferable license to use Company Software on an iOS
                  product that You own or control and as permitted by the Usage
                  Rules set forth in the Apple App Store Terms of Service.
                </li>
                <li>
                  <u>Maintenance and Support.</u>
                   Company is solely responsible for providing any maintenance
                  and support services with respect to Company Software, as
                  specified in this Agreement (if any), or as required under
                  applicable law. Company and You acknowledge that Apple has no
                  obligation whatsoever to furnish any maintenance and support
                  services with respect to Company Software.
                </li>
                <li>
                  <u>Warranty.</u>
                   Company is solely responsible for any product warranties,
                  whether express or implied by law, to the extent not
                  effectively disclaimed. In the event of any failure of Company
                  Software to conform to any applicable warranty, You may notify
                  Apple, and Apple will refund the purchase price for Company
                  Software to You; and to the maximum extent permitted by
                  applicable law, Apple will have no other warranty obligation
                  whatsoever with respect to Company Software, and any other
                  claims, losses, liabilities, damages, costs or expenses
                  attributable to any failure to conform to any warranty will be
                  Company’s sole responsibility.
                </li>
                <li>
                  <u>Product Claims.</u>
                   Company and You acknowledge that Company, not Apple, is
                  responsible for addressing any claims of You or any third
                  party relating to Company Software or Your possession and/or
                  use of Company Software, including: (i) product liability
                  claims; (ii) any claim that Company Software fails to conform
                  to any applicable legal or regulatory requirement; and (iii)
                  claims arising under consumer protection or similar
                  legislation. This Agreement does not limit Company’s liability
                  to You beyond what is permitted by applicable law.
                </li>
                <li>
                  <u>Intellectual Property Rights.</u>
                   Company and You acknowledge that, in the event of any
                  third-party claim that Company Software or Your possession and
                  use of Company Software infringes that third party’s
                  intellectual property rights, Company, not Apple, will be
                  solely responsible for the investigation, defense, settlement
                  and discharge of any such intellectual property infringement
                  claim.
                </li>
                <li>
                  <u>Legal Compliance.</u>
                   You represent and warrant that (i) You are not located in a
                  country that is subject to a U.S. Government embargo, or that
                  has been designated by the U.S. Government as a “terrorist
                  supporting” country; and (ii) You are not listed on any U.S.
                  Government list of prohibited or restricted parties.
                </li>
                <li>
                  <u>Developer Name and Address.</u>
                   Company’s contact information for any end-user questions,
                  complaints or claims with respect to Company Software is set
                  forth in Section 24.g. below.
                </li>
                <li>
                  <u>Third-Party Terms of Agreement.</u>
                   You must comply with applicable third-party terms of
                  agreement when using Company Software.
                </li>
                <li>
                  <u>Third-Party Beneficiary.</u>
                   Company and You acknowledge and agree that Apple, and Apple’s
                  subsidiaries, are third-party beneficiaries of this Agreement,
                  and that, upon Your acceptance of the terms and conditions of
                  this Agreement, Apple will have the right (and will be deemed
                  to have accepted the right) to enforce this Agreement against
                  You as a third-party beneficiary thereof.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                SPECIAL STATE TERMS REGARDING YOUR RIGHT TO CANCEL.
              </strong>
               The following provisions are added to this Agreement for paid
              subscription Users residing in Arizona, California, Connecticut,
              Illinois, Iowa, Minnesota, New Jersey, New York, North Carolina,
              Ohio, Rhode Island, Wisconsin, or any other state with laws which
              may require notice of cancellation rights: You, the buyer, may
              cancel this Agreement, without any penalty or obligation, at any
              time prior to midnight of the original contract seller’s third
              business day following the date of this contract, excluding
              Sundays and holidays. To cancel this Agreement, mail or deliver a
              signed and dated notice, or send a telegram which states that You,
              the buyer, are canceling this Agreement, or words of similar
              effect. This notice shall be sent to support@scratchshark.com.
              <br />
              In the event that You die before the end of Your paid subscription
              period, Your estate shall be entitled to a refund of that portion
              of any payment You had made for Your paid subscription which is
              allocable to the period after Your death. In the event that You
              become disabled (such that You are unable to use the paid
              subscription and the condition is verified in writing by a
              physician) before the end of Your paid subscription period, You
              shall be entitled to a refund of that portion of any payment You
              had made for Your subscription which is allocable to the period
              after Your disability, by providing Company notice at the same
              address as listed above.
            </li>
            <li>
              <strong>COMPANY SERVICE LIMITED TO UNITED STATES</strong>
              <br />
              The Service is intended for use only by United States residents at
              this time.
              <br />
              <strong>SCRATCHSHARK</strong>
              {' '}
              is headquartered in the United
              States. We control and offer the Services from the United States
              of America and, regardless of Your place of residence, Your use of
              them is governed by the law of the State of MASSACHUSETTS, USA. We
              make no representations that the Services are appropriate for use
              in other locations or are legal in all jurisdictions. Those who
              access or use the Services from other locations do so at their own
              risk and are responsible for compliance with local law.
              <br />
              You consent to the transfer and processing of Your data in the
              United States of America and any other jurisdiction throughout the
              world. Please see our Privacy Policy for more information on how
              we collect, use and transfer your data.
            </li>
            <li>
              <strong>MISCELLANEOUS PROVISIONS.</strong>
            </li>
            <li className="list-style-n">
              <ul>
                <li>
                  <u>Severability, Waiver of Agreement Provisions.</u>
                    You and We agree that if any provision of this Agreement
                  shall be deemed unlawful, void, or for any reason
                  unenforceable, then that provision shall be deemed severable
                  from this Agreement and shall not affect the validity and
                  enforceability of any remaining provisions. A provision of
                  this Agreement may be waived only by a written instrument
                  executed by the party entitled to the benefit of such
                  provision. The failure of any party at any time to require
                  performance of any provision of this Agreement shall in no
                  manner affect such party’s right at a later time to enforce
                  the same. A waiver of any breach of any provision of this
                  Agreement shall not be construed as a continuing waiver of
                  other breaches of the same or other provisions of this
                  Agreement.
                </li>
                <li>
                  <u>Notices.</u>
                    Company may provide You with notices, including those
                  regarding changes to this Agreement, by email or postings on
                  the Company Services. You hereby consent to the use of
                  electronic communications. To give Company notice, you may do
                  so through the physical and email addresses provided in
                  Section 25.g and such notice will be effective upon receipt.
                </li>
                <li>
                  <u>You May Not Assign, But Company May.</u>
                   This Agreement, and any rights and licenses granted
                  hereunder, may not be transferred or assigned by You. However,
                  Company may at any time and for any reason transfer or assign
                  without restriction this Agreement and the obligations
                  contained in the Agreement to a third party. You hereby
                  acknowledge and agree that if another company acquires Our
                  company, business, or Our assets, that transaction may include
                  a sale or transfer of Your User Content, and You agree to such
                  transfer without further action or confirmation.
                </li>
                <li>
                  <u>Survival of Provisions.</u>
                    The following Sections will survive any termination of this
                  Agreement or any termination of Your use of or subscription to
                  the Company Services: 1-4, 6-7, 10.d-10.f, 11-13, 14
                  (excluding 14.b), 15-22, and 24-25.
                </li>
                <li>
                  <u>No Third-Party Beneficiaries.</u>
                    Company’s past, present, and future affiliates (i.e.,
                  companies controlling, controlled by, or under common control
                  with Company) are third-party beneficiaries of all the rights,
                  protections, and benefits afforded Company under this
                  Agreement, including Section 20. Otherwise, there are no
                  third-party beneficiaries to this Agreement.
                </li>
                <li>
                  <u>Headings; Entire Agreement.</u>
                   The heading references herein are for convenience purposes
                  only, do not constitute a part of this Agreement and shall not
                  be deemed to limit or affect any of the provisions hereof. The
                  word “including” means “including without limitation.” This
                  Agreement is the entire agreement between You and Us relating
                  to the subject matter herein and shall not be modified except
                  in writing, agreed to by both parties.
                </li>
                <li>
                  <u>Our Disclosures; Your Inquiries.</u>
                    The services hereunder are offered by ScratchShark, Inc.. If
                  you have a question or complaint, you may reach us at
                  support@scratchshark.com. California residents may reach the
                  Complaint Assistance Unit of the Division of Consumer Services
                  of the California Department of Consumer Affairs by mail at
                  1625 North Market Blvd., Sacramento, CA 95834, or by telephone
                  at (916) 445-1254 or (800) 952-5210.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
