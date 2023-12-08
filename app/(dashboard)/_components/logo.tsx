import Image from "next/image";

export const Logo = () => {
  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",
      

    }}>
    <Image
      height={50}
      width={50}
      alt="logo"
      src="/logo.svg"
      style={{
        objectFit: "cover",
        borderRadius: "100px",
      }}
    />
    <h2 className="text-[#f51515] mt-4 font-extrabold font-size: 2.5em;">EduTech LMS</h2>
    </div>
    </>
  )  
}