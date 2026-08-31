import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-5
          pb-8
          pt-16
          sm:px-8
          sm:pb-12
          sm:pt-24
          lg:px-10
          xl:px-16
        "
      >

        {/* Main Brand */}

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <h2
            className="
              text-4xl
              font-extrabold
              tracking-wide

              sm:text-5xl
              md:text-7xl
            "
          >
            Rnotsky
          </h2>


          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-gray-400

              sm:text-lg
              sm:leading-8
            "
          >
            Engineering intelligence beyond imagination.
            Building systems that connect ideas with reality.
          </p>

        </div>




        {/* System Panel */}

        <div
          className="
            mx-auto
            mt-14
            max-w-4xl

            rounded-3xl

            border
            border-white/10

            bg-[#0b0b0b]

            p-6

            sm:mt-20
            sm:p-8
            md:p-10
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-purple-400

              sm:text-sm
            "
          >
            System Status
          </p>



          <div className="mt-6 space-y-5">

            {[
              {
                name: "AI Systems",
                status: "ONLINE",
                color: "text-purple-400",
              },
              {
                name: "Robotics Lab",
                status: "DEVELOPING",
                color: "text-gray-400",
              },
              {
                name: "Innovation Engine",
                status: "ACTIVE",
                color: "text-purple-400",
              },
            ].map((item, index) => (

              <div
                key={item.name}
                className={`
                  flex
                  flex-col
                  gap-2

                  sm:flex-row
                  sm:items-center
                  sm:justify-between

                  ${
                    index !== 2
                      ? "border-b border-white/10 pb-4"
                      : ""
                  }
                `}
              >

                <span className="text-gray-400">
                  {item.name}
                </span>


                <span className={item.color}>
                  {item.status}
                </span>

              </div>

            ))}

          </div>

        </div>







        {/* Navigation */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-10

            border-t
            border-white/10

            pt-10

            sm:mt-20

            md:grid-cols-2
          "
        >



          {/* Modules */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-gray-500

                sm:text-sm
              "
            >
              Modules
            </p>



            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-x-6
                gap-y-4
                text-gray-300
              "
            >


              <FooterLink href="/">
                Home
              </FooterLink>


              <FooterLink href="/projects">
                Projects
              </FooterLink>


              <FooterLink href="/about">
                About
              </FooterLink>


              <FooterLink href="/contact">
                Contact
              </FooterLink>


              <FooterLink href="/privacy">
                Privacy
              </FooterLink>


              <FooterLink href="/terms">
                Terms
              </FooterLink>
          
            <FooterLink href="/support">
                Support
              </FooterLink>
                       
             <FooterLink href="/Feedback">
                Feedback
              </FooterLink>


            </div>

          </div>








          {/* Connect */}

          <div className="md:text-right">


            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-gray-500

                sm:text-sm
              "
            >
              Connect
            </p>



            <div
              className="
                mt-5
                flex
                items-center
                justify-start
                gap-5

                md:justify-end
              "
            >


              <SocialLink
                href="https://instagram.com/rnotsky"
                color="hover:text-pink-500"
              >
                <FaInstagram size={24}/>
              </SocialLink>



              <SocialLink
                href="https://www.youtube.com/@Rnotsky-official"
                color="hover:text-red-500"
              >
                <FaYoutube size={24}/>
              </SocialLink>




              <SocialLink
                href="https://x.com/rnotskyofficial"
                color="hover:text-white"
              >
                <FaXTwitter size={22}/>
              </SocialLink>




              <SocialLink
                href="https://linkedin.com/company/rnotsky"
                color="hover:text-blue-500"
              >
                <FaLinkedin size={24}/>
              </SocialLink>


            </div>


          </div>


        </div>








        {/* Bottom */}

        <div
          className="
            mt-10

            flex
            flex-col
            gap-3

            border-t
            border-white/10

            pt-8

            text-sm
            text-gray-500

            sm:mt-12

            md:flex-row
            md:justify-between
          "
        >

          <span>
            © 2026 Rnotsky. All systems reserved.
          </span>


          <span>
            Built with intelligence.
          </span>


        </div>


      </div>

    </footer>
  );
}






function FooterLink({
  href,
  children,
}:{
  href:string;
  children:React.ReactNode;
}) {

  return (

    <a
      href={href}

      className="
        group
        relative

        transition-all
        duration-300

        hover:translate-x-1
        hover:text-white
      "
    >

      {children}


      <span
        className="
          absolute
          -bottom-1
          left-0

          h-[1px]
          w-0

          bg-purple-500

          transition-all
          duration-300

          group-hover:w-full
        "
      />

    </a>

  );
}






function SocialLink({
  href,
  children,
  color,
}:{
  href:string;
  children:React.ReactNode;
  color:string;
}) {

  return (

    <a
      href={href}

      target="_blank"

      rel="noopener noreferrer"

      className={`
        text-gray-400

        transition-all
        duration-300

        hover:scale-110

        ${color}
      `}
    >
      {children}

    </a>

  );

}