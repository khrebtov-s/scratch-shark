import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.module.scss';

const Terms = () => (
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
        <h2>Privacy Policy</h2>
        <a onClick={() => window.history.back()}>
          <span className="icon-left-arrow" />
          <br />
          <p>Back</p>
        </a>
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
        <h2>ScratchShark Privacy Policy</h2>
        <h2>Last Revised: October 16, 2020</h2>
        <p>
          SCRATCHSHARK, INC. (“ScratchShark”, “Company”, “we”, “us” or “our”)
          is committed to protecting the privacy of visitors to our website
          located at scratchshark.com (the “Site”) and users of our
          application for mobile devices (the “App”, and together with the
          Site the “Platform”). This Privacy Policy (“Policy”) explains how we
          may collect, use, share and otherwise process information in
          connection with the Platform, and the rights and choices that may be
          available to you with respect to your information. If you do not
          agree to the terms of this Policy, you must immediately cease your
          use of the Platform. We may update this Policy from time to time,
          and your use of the Platform constitutes your express acceptance to
          the terms of the then-posted version of this Policy.
        </p>

        <p>
          <u>Information Collection</u>
        </p>

        <p>
          We collect personal information you provide to us, or that we
          receive from marketing partners, social media platforms, other users
          (via referrals or registries), and other publicly-available sources.
          The information we collect includes, without limitation:
        </p>

        <ul>
          <li>
            <strong>Contact Data</strong>
            , such as your name; your email
            address; and your phone number.
          </li>
          <li>
            <strong>Account Data</strong>
            , such as your username and password
            that you may set to establish an online account with us or
            register for a ScratchShark-sponsored event or other promotion. If
            you choose to login to the Site or App via a third-party platform
            or social media network, we may collect information from that
            platform or network. You can read more about your privacy choices
            with respect to such platforms in the “Options” section below.
          </li>
          <li>
            <strong>Feedback</strong>
            , such as information you provide, and
            content that you upload when you contact us with questions,
            feedback, upload attachments, or otherwise correspond with us
            online (including on our social media pages).
          </li>
          <li>
            <strong>Payment Data</strong>
            , such as credit card number and
            expiration date, account number, and billing and shipping
            addresses.
          </li>
          <li>
            <strong>Transaction Data</strong>
            , such as details about the
            products you browse and the purchases you make on our Platform.
          </li>
          <li>
            <strong>Engagement Data</strong>
            , such as your preferences for
            receiving communications about our activities and publications,
            and details about how you engage with our Platform and
            communications.
          </li>
          <li>
            <strong>Automatically Collected Data.</strong>
            {' '}
            We, our service
            providers and third-party advertising partners use cookies,
            beacons, pixel tags and other tracking technologies to
            automatically log information about you, your computer or mobile
            device, and your activity over time on the Platform and other
            online services, including:
          </li>
          <li>
            <ul>
              <li>
                <strong>Device Data</strong>
                , such as your computer or mobile
                device operating system type and version number, manufacturer
                and model, browser type, screen resolution, IP address, device
                identifier (such as the Google Advertising ID or Apple ID for
                Advertising), the website you visited before browsing our
                Platform, and general location information such as city, state
                or geographic area.
              </li>
              <li>
                <strong>Online Activity Data</strong>
                , such as browsing
                history, search history, whether you clicked on or opened one
                of our emails, which of our pages or screens you viewed, how
                long you spent on a page or screen, navigation paths between
                pages or screens, information about your activity on a page or
                screen, access times, and duration of access.
              </li>
              <li className="list-style-n">
                Please visit the “Options” section of this Policy for
                information on how to disable or opt-out of cookies and
                similar technologies.
              </li>
            </ul>
          </li>
        </ul>

        <p>
          You may refuse to provide certain personal information, but some
          parts of the Platform may not be fully available or functional
          without submitting such information.
          {' '}
        </p>

        <p>
          <strong>
            <u>Use of Information</u>
          </strong>
        </p>

        <p>We use your personal information for the following purposes: </p>
        <p>
          Operations. We use personal information to operate the Platform and
          provide related services, including to:
        </p>
        <ul>
          <li>provide, operate and improve the Platform and our services</li>
          <li>manage and fulfill the orders you’ve placed on the Platform</li>
          <li>establish and maintain your account on the Platform</li>
          <li>
            facilitate your toÚÒ login to the Platform via third-party identity
            and access management providers
          </li>
          <li>
            enable security features of the Platform, such as by sending you
            security codes via email or SMS, and remembering devices from
            which you have previously logged in
          </li>
          <li>
            communicate with you about the Platform or your orders, including
            by sending you announcements, updates, security alerts, and
            support and administrative messages
          </li>
          <li>
            communicate with you about events or contests in which you
            participate
          </li>
          <li>
            understand your needs and interests, and personalize your
            experience with the Platform and our communications
          </li>
          <li>respond to your requests, questions and feedback</li>
          <li>protect the security of the Platform and our systems</li>
          <li>provide you with customer support when needed</li>
        </ul>
        <p>
          <strong>Research and development.</strong>
          {' '}
          We analyze use of the
          Platform to analyze and improve the Platform and our services, and
          to develop new products and services, including by studying user
          demographics and use of the Platform. We may use a third-party
          service provider for this purpose.
        </p>
        <p>
          <strong>Marketing.</strong>
          {' '}
          We may send you ScratchShark-related
          marketing communications as permitted by law. You will have the
          ability to opt-out of our marketing and promotional communications
          as described in the “Opt out of marketing” section below.
        </p>
        <p>
          <strong>Advertising.</strong>
          {' '}
          We may also work with third-party
          advertising partners who use cookies and similar technologies to
          deliver targeted advertising that is displayed on unaffiliated
          websites, to measure the effectiveness of advertising on behalf of
          our advertising partners, and to identify the audience most likely
          to respond to an advertisement. These advertisements are delivered
          by our advertising partners and may be targeted based on your use of
          the Platform or your activity elsewhere online.
        </p>
        <p>
          <strong>Compliance, fraud prevention, and safety.</strong>
          {' '}
          We may
          use your personal information as we believe necessary or appropriate
          to comply with applicable laws, lawful requests, and legal process,
          such as to respond to subpoenas or requests from government
          authorities, and as we believe necessary or appropriate to: (a)
          protect our, your or others’ rights, privacy, safety or property
          (including by making and defending legal claims); (b) enforce the
          terms and conditions that govern the Platform; and (c) protect,
          investigate and deter against fraudulent, harmful, unauthorized,
          unethical or illegal activity.
        </p>
        <p>
          We may create anonymous, aggregated or de-identified data from your
          personal information and other individuals whose personal
          information we collect, by removing the information that makes the
          data personally identifiable to you. We may use and share such
          anonymous, aggregated or de-identified data for any purpose we deem
          appropriate, including without limitation to maintain and improve
          the Platform and our current and future products and services.
        </p>

        <p>
          <strong>
            <u>Sharing of Information</u>
          </strong>
        </p>

        <p>We may share personal information with:</p>

        <p>
          <strong>Service providers.</strong>
          {' '}
          We may share your personal
          information with third-party companies and individuals that provide
          services on our behalf or help us operate the Platform (such as
          payment, customer support, hosting, analytics, email delivery,
          marketing, and database management services). These third parties
          may use your personal information only as directed or authorized by
          us and in a manner consistent with this Policy and are prohibited
          from using or disclosing your information for any other purpose.
        </p>

        <p>
          <strong>Advertising partners.</strong>
          {' '}
          We may enable advertising
          partners to automatically collect information directly from our
          Platform for targeted marketing purposes.
        </p>

        <p>
          <strong>Other users of the Platform and social media.</strong>
          {' '}
          We
          may provide functionality that enables you to disclose personal
          information to other users of the Platform or certain social media
          platforms. We do not control how other users or third parties use
          any personal information that you make available to other users or
          third-party platforms.
        </p>

        <p>
          <strong>Compliance;</strong>
          {' '}
          corporate transaction. We may also
          share personal information with third parties: (i) for our
          compliance, fraud prevention and safety purposes, including in
          connection with a court order, subpoena, government investigation,
          or when otherwise required by law; and (ii) in connection with, or
          during negotiation of, a corporate sale, merger, acquisition, or
          similar event.
          {' '}
        </p>

        <p>
          <strong>
            <u>Options</u>
          </strong>
        </p>

        <p>
          <strong>Opt out of marketing communications.</strong>
          {' '}
          If at any time
          you wish to opt-out of future newsletters or other promotional
          emails, you may click the “unsubscribe” link in the email or
          otherwise contact us at support@scratchshark.com. It may take up to
          10 business days before you stop receiving promotional emails. This
          opt-out does not apply to operational communications, for example,
          order confirmation emails.
        </p>

        <p>
          <strong>Access, update or delete information.</strong>
          {' '}
          If you have
          registered for an account with us, you may review and update certain
          personal information in your account profile by logging into the
          account. You may delete your account by contacting us at
          support@scratchshark.com.
        </p>

        <p>
          <strong>Cookies & browser web storage.</strong>
          {' '}
          Most browsers let
          you remove or reject cookies. To do this, follow the instructions in
          your browser settings. Many browsers accept cookies by default until
          you change your settings. Please note that if you set your browser
          to disable cookies, the Platform may not work properly. Similarly,
          your browser settings may allow you to clear your browser web
          storage.
        </p>

        <p>
          <strong>Targeted online advertising.</strong>
          {' '}
          Some of our business
          partners that collect information about users’ activities on or
          through the Platform may be members of organizations or programs
          that provide choices to individuals regarding the use of their
          browsing behavior for purposes of targeted advertising. Users may
          opt out of receiving targeted advertising by:
          {' '}
        </p>

        <ul>
          <li>
            <strong>Blocking cookies in your browser.</strong>
            Most browsers
            let you remove or reject cookies, including cookies used for
            interest-based advertising. To do this, follow the instructions in
            your browser settings. Many browsers accept cookies by default
            until you change your settings. For more information about
            cookies, including how to see what cookies have been set on your
            device and how to manage and delete them, visit
            www.allaboutcookies.org .
            {' '}
            {' '}
          </li>
          <li>
            <strong>
              Blocking advertising ID use in your mobile settings.
            </strong>
            Your mobile device settings may provide functionality to limit
            use of the advertising ID associated with your mobile device for
            interest-based advertising purposes.
          </li>
          <li>
            <strong>Using privacy plug-ins or browsers.</strong>
            You can
            block our Platform from setting cookies used for interest-based
            ads by using a browser with privacy features, like Brave, or
            installing browser plugins like Privacy Badger, Ghostery or uBlock
            Origin, and configuring them to block third-party
            cookies/trackers.
          </li>
          <li>
            <strong>Third party platform opt-outs.</strong>
            The following
            third-party advertising services (which we may integrate with from
            time to time) offer opt-out features that let you opt-out of use
            of your information for interest-based advertising:
          </li>
          <li>
            <ul>
              <li>Google: https://adssettings.google.com</li>
              <li>
                Bing:
                https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads
              </li>
              <li>
                Outbrain:
                https://my.outbrain.com/recommendations-settings/home
              </li>
              <li>
                Criteo:
                https://www.criteo.com/privacy/disable-criteo-services-on-internet-browsers/
              </li>
              <li>BidSwitch: http://x.bidswitch.net/opt-out</li>
              <li>Xandr: https://platform.xandr.com/privacy-center/</li>
              <li>
                Aggregate:
                http://www.aggregateknowledge.com/privacy/ak-optout/
              </li>
              <li>
                Pinterest:
                https://help.pinterest.com/en/article/personalization-and-data
              </li>
              <li>Facebook: https://www.facebook.com/about/ads</li>
            </ul>
          </li>
          <li>
            <strong>Advertising industry opt-out tools.</strong>
            You can also
            use these opt-out options to limit use of your information for
            interest-based advertising by participating companies:
          </li>
          <li>
            <ul>
              <li>
                Digital advertising Alliance: http://optout.aboutads.info
              </li>
              <li>
                Network Advertising Initiative:
                http://optout.networkadvertising.org/?c=1
              </li>
            </ul>
          </li>
        </ul>

        <p>
          Note that because these opt-out mechanisms are specific to the
          device or browser on which they are exercised, you will need to
          opt-out on every browser and device that you use.
        </p>

        <p>
          <strong>Do Not Track.</strong>
          {' '}
          Some Internet browsers may be
          configured to send “Do Not Track” signals to the online services
          that you visit. We currently do not respond to “Do Not Track” or
          similar signals. To find out more about “Do Not Track,” please visit
          http://www.allaboutdnt.com .
        </p>

        <p>
          <strong>Third-party platforms or social media networks.</strong>
          {' '}
          If
          you choose to connect to the Platform via a third-party platform or
          social media network, you may have the ability to limit the
          information that we may obtain from the third party at the time you
          login to the Platform using the third party’s authentication service
          or otherwise connect your account. Subsequently, you may be able to
          control your settings through the third party’s platform or service.
          If you withdraw our ability to access certain information from a
          third-party platform or social media network, that choice will not
          apply to information that we have already received from that third
          party.
        </p>

        <p>
          <strong>
            <u>Information about Children</u>
          </strong>
        </p>

        <p>
          This Platform is not directed to persons under 18. By using the
          Platform, you represent that you are at least 18 years of age (or
          twenty-one (21) years of age in places where eighteen (18) years is
          not the age of majority or where twenty-one (21) years of age is the
          minimum age under state law to participate in the lottery). We do
          not knowingly solicit or collect Personal Data online from children
          under the age of 13 without parental or guardian consent. If we
          discover that we have collected personal information from a person
          under 13, we will take commercially reasonable measures to promptly
          delete such information from our systems. If a parent or guardian
          becomes aware of his or her child has provided us with personal
          information, please contact us at support@scratchshark.com.
        </p>

        <p>
          <strong>
            <u>User Generated Content</u>
          </strong>
        </p>

        <p>
          We may make available on our Platform, or link to, features that
          allow you to generate your own content or share information online
          (e.g., on our blog or product pages). Please do not embed personal
          information in the content you generate or share personal
          information online in public forums, because any such information
          can be collected and used by others. We have no control over, and
          take no responsibility for, the use, storage, dissemination or
          erasure of personal information embedded in user-generated content
          or shared on the Platform. By posting personal information online in
          public forums, you may receive unsolicited messages from other
          parties.
        </p>

        <p>
          <strong>
            <u>Platform Limited to United States</u>
          </strong>
        </p>

        <p>
          The Platform is intended for use only by United States residents at
          this time. Individuals residing outside of the United States are
          prohibited from using the Platform, and individuals in violation of
          this policy do so at their own risk and may be subject to account
          termination. Users may not access or register for or use the
          Platform if prohibited by law in their country of residence.
        </p>

        <p>
          ScratchShark is headquartered in the United States. Presently,
          information we collect from you will be processed in the United
          States, but your personal information may be stored and processed in
          any country where we have facilities or in which we engage service
          providers, and by using the Platform you understand that your
          information may be transferred to countries outside of your country
          of residence, including the United States, which may have data
          protection laws that are different from those of the country in
          which you reside.
        </p>

        <p>
          <strong>
            <u>Security</u>
          </strong>
        </p>

        <p>
          We maintain technical, administrative, physical, electronic and
          procedural safeguards to protect the confidentiality and security of
          personal information provided to us. We take reasonable steps to
          protect personal information, including: using Secure Socket Layer
          to encrypt your credit card number, name and address; requiring you
          to establish a password to access your account on the Platform; and
          regularly monitoring our servers and IT systems for possible
          vulnerabilities and attacks. Unfortunately, despite these efforts,
          the transmission of information via the Internet is not completely
          secure. We cannot guarantee the security of personal information
          transmitted to or through our Platform, and any such transmission is
          at your own risk.
        </p>

        <p>
          <strong>
            <u>Third-Party Sites</u>
          </strong>
        </p>

        <p>
          The Platform contains links to third-party websites. We cannot
          control, and take no responsibility for, the content or privacy
          practices of such third-party websites. Please carefully review the
          privacy policy and any other applicable terms for such third-party
          websites.
        </p>

        <p>
          <strong>
            <u>Contact</u>
          </strong>
        </p>

        <p>
          If you have any further questions concerning this Policy, or would
          like to request to correct, update, or delete personal information,
          please contact us at support@scratchshark.com .
        </p>

        <p>
          <strong>
            <u>Policy Updates</u>
          </strong>
        </p>

        <p>
          This Policy was last updated on October 16, 2020. Any changes we may
          make to this Policy in the future will be posted on this page and,
          where appropriate, notified to you by email. Please check back
          regularly to keep informed of updates or changes to this Policy.
        </p>

        <p>
          <strong>
            <u>NOTICE TO CALIFORNIA RESIDENTS</u>
          </strong>
        </p>

        <p>
          <strong>Scope.</strong>
          {' '}
          This section describes how we collect, use,
          and share the Personal Information of California residents as a
          “business” under the California Consumer Privacy Act (“CCPA”) and
          their rights with respect to their Personal Information. For
          purposes of this section, “Personal Information” has the meaning
          given in the CCPA but does not include information exempted from the
          scope of the CCPA. Additionally, this section does not apply to
          information we collect from you in the course of communicating with
          you in your capacity as an employee, controlling owner, director,
          officer or contractor of an organization (i.e., company,
          partnership, sole proprietorship, non-profit or government agency)
          in the context of performing due diligence on, or providing or
          receiving products or services to or from, that organization. In
          some cases we may provide a different privacy notice to certain
          categories of California residents, such as job applicants, in which
          case that notice will apply instead of this section.
        </p>

        <p>
          <strong>Personal Information that we collect and use</strong>
        </p>

        <p>
          The list below summarizes the Personal Information we collect and
          use by reference to the categories specified in the
          {' '}
          <u>CCPA</u>
          in
          California Civil Code § 1798.140(o), and describes our practices
          during the 12 months preceding the effective date of this Policy.
          The “categories we collect” refer to the categories described above
          in the section entitled Information Collection. Information you
          voluntarily provide to us, such as in free-form webforms, may
          contain other categories of Personal Information not described
          below.
        </p>

        <ul>
          <li>
            <strong>Identifiers</strong>
            <ul>
              <li>
                Categories we collect: Contact data, Date of Birth, Gender
              </li>
            </ul>
          </li>
          <li>
            <strong>Commercial Information </strong>
            <ul>
              <li>
                Categories we collect: Transaction data, Engagement data,
                Feedback
              </li>
            </ul>
          </li>
          <li>
            <strong>Financial Information</strong>
            <ul>
              <li>Categories we collect: Payment data, Transaction data</li>
            </ul>
          </li>
          <li>
            <strong>Online Identifiers</strong>
            <ul>
              <li>Categories we collect: Account data, Device data</li>
            </ul>
          </li>
          <li>
            <strong>Internet or Network Information </strong>
            <ul>
              <li>
                Categories we collect: Transaction data, Engagement data,
                Device data, Online activity data
                {' '}
              </li>
            </ul>
          </li>
          <li>
            <strong>Geolocation Data</strong>
            <ul>
              <li>Categories we collect: Device data</li>
            </ul>
          </li>
          <li>
            <strong>Inferences</strong>
            <ul>
              <li>
                Categories we collect: Transaction data, Engagement data,
                Device data, Online activity data
              </li>
            </ul>
          </li>
        </ul>
        <p>For information about:</p>

        <ul>
          <li>
            The categories of sources of this information, see the section
            above entitled Information Collection;
          </li>
          <li>
            The business/commercial purposes for which we collect this
            information, see the section above entitled Use of Information;
            and
          </li>
          <li>
            The categories of third parties to which we disclose this
            information for business purposes, see the section above entitled
            Sharing of Information.
            {' '}
          </li>
        </ul>

        <p>
          <strong>California Residents’ Privacy Rights</strong>
        </p>

        <p>
          As a California resident, you have the rights listed below. However,
          these rights are not absolute, and in certain cases we may decline
          your request as permitted by law.
        </p>

        <ul>
          <li>
            Information. You can request the following information about how
            we have collected, used and shared your personal information
            during the past 12 months, which we have made available to you
            without your having to request it by describing it above:
            <ul>
              <li>
                The categories of Personal Information we have collected.
              </li>
              <li>
                The categories of sources from which we collected the Personal
                Information.
              </li>
              <li>
                The business or commercial purpose for collecting and/or
                selling Personal Information
              </li>
              <li>
                The categories of third parties with whom we share the
                Personal Information.
              </li>
              <li>
                The categories of Personal Information that we sold or
                disclosed for a business purpose.
              </li>
              <li>
                The categories of third parties to whom the Personal
                Information was sold or disclosed for a business purpose.
              </li>
            </ul>
          </li>
          <li>
            <strong>Access.</strong>
            {' '}
            You can request a copy of the Personal
            Information that we maintain about you.
            {' '}
          </li>
          <li>
            <strong>Deletion.</strong>
            {' '}
            You can ask us to delete the Personal
            Information that we collected from you.
          </li>
          <li>
            <strong>Nondiscrimination.</strong>
            {' '}
            You are entitled to exercise
            the rights described above free from discrimination as prohibited
            by the CCPA.
          </li>
        </ul>

        <p>We do not sell your Personal Information</p>

        <p>
          Based on our understanding of the term “sell” under the CCPA, we do
          not “sell” your Personal Information and have not sold it to third
          parties for a business or commercial purpose in the 12 months
          preceding the effective date of this Policy. However, like many
          companies online, we use services provided by Facebook and others
          that help deliver interest-based ads to you as described in the
          section above entitled Targeted Online Advertising. You can opt-out
          of this advertising as described below under the section entitled
          California Residents – Online Tracking Opt-out.
        </p>

        <p>
          <strong>How to Submit a Request</strong>
        </p>

        <p>
          To request access to or deletion of personal information, email
          support@scratchshark.com .
        </p>

        <p>
          We cannot process your request if you do not provide us with
          sufficient detail to allow us to understand and respond to it.
          {' '}
        </p>

        <p>
          We will need to verify your identity to process your information,
          access and deletion requests and reserve the right to confirm your
          California residency. To verify your identity, we may require you to
          log into your ScratchShark account (if applicable), provide
          government identification, give a declaration as to your identity
          under penalty of perjury and/or provide additional information. Your
          authorized agent may make a request on your behalf upon our
          verification of the agent’s identity and our receipt of a copy of a
          valid power of attorney given to your authorized agent pursuant to
          California Probate Code Sections 4000-4465. If you have not provided
          your agent with such a power of attorney, you must provide your
          agent with signed permission to exercise your CCPA rights on your
          behalf, provide the information we request to verify your identity,
          and provide us with written confirmation that you have given the
          authorized agent permission to submit the request. Authorized agents
          are required by California law to implement and maintain reasonable
          security procedures and practices to protect their clients’
          information.
        </p>

        <p>
          <strong>California Residents – Online Tracking Opt-out</strong>
        </p>

        <p>
          Like many companies online, we use services provided by Google,
          Facebook and other companies that use tracking technology. These
          services rely on tracking technologies – such as cookies and web
          beacons – to collect directly from your device information about
          your browsing activities, your interactions with websites, and the
          device you are using to connect to the Internet. There are a number
          of ways to opt out of having your online activity and device data
          collected through these services, which we have summarized below:
        </p>

        <ul>
          <li>
            <strong>Blocking cookies in your browser. </strong>
            {' '}
            Most browsers
            let you remove or reject cookies, including cookies used for
            interest-based advertising. To do this, follow the instructions in
            your browser settings. Many browsers accept cookies by default
            until you change your settings. For more information about
            cookies, including how to see what cookies have been set on your
            device and how to manage and delete them, visit
            www.allaboutcookies.org .
          </li>
          <li>
            <strong>
              Blocking advertising ID use in your mobile settings.
            </strong>
            Your mobile device settings may provide functionality to limit
            use of the advertising ID associated with your mobile device for
            interest-based advertising purposes.
          </li>
          <li>
            <strong>Using privacy plug-ins or browsers.</strong>
            You can
            block our websites from setting cookies used for interest-based
            ads by using a browser with privacy features, like Brave, or
            installing browser plugins like Privacy Badger, Ghostery or uBlock
            Origin, and configuring them to block third-party
            cookies/trackers.
          </li>
          <li>
            Platform opt-outs. The following third-party advertising services
            offer opt-out features that let you opt-out of use of your
            information for interest-based advertising:
            <ul>
              <li>Google: https://adssettings.google.com</li>
              <li>
                Bing:
                https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads
              </li>
              <li>
                Outbrain:
                https://my.outbrain.com/recommendations-settings/home
              </li>
              <li>
                Criteo:
                https://www.criteo.com/privacy/disable-criteo-services-on-internet-browsers/
              </li>
              <li>BidSwitch: http://x.bidswitch.net/opt-out</li>
              <li>Xandr: https://platform.xandr.com/privacy-center/</li>
              <li>
                Aggregate:
                http://www.aggregateknowledge.com/privacy/ak-optout/
              </li>
              <li>
                Pinterest:
                https://help.pinterest.com/en/article/personalization-and-data
              </li>
              <li>Facebook: https://www.facebook.com/about/ads</li>
            </ul>
          </li>
          <li>
            Advertising industry opt-out tools. You can also use these
            opt-out options to limit use of your information for
            interest-based advertising by participating companies:
            <ul>
              <li>
                Digital advertising Alliance: http://optout.aboutads.info
              </li>
              <li>
                Network Advertising Initiative:
                http://optout.networkadvertising.org/?c=1
              </li>
            </ul>
          </li>
        </ul>

        <p>
          Note that because these opt-out mechanisms are specific to the
          device or browser on which they are exercised, you will need to
          opt-out on every browser and device that you use.
        </p>
      </div>
    </div>
  </div>
);

export default Terms;
