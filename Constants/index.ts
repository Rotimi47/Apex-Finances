import Staff from '@/public/Staff.svg'
import StaffTwo from '@/public/StaffTwo.svg'
import calcIcon from '@/public/calcIcon.svg'
import staffIcon from '@/public/staffIcon.svg'
import folderIcon from '@/public/folderIcon.svg'
import pencil from '@/public/pencilImage.svg'
import rubik from '@/public/rubikCube.svg'
import currency from '@/public/currencyImage.svg'




export const testimonials =[  
{
    name: "Taylor M., 28 years old",
    oneJob:"Frontend Developer",
    twoJob:"Commercial Photographer",
    threeJob:"Stylist",
    message:"Managing my taxes as a freelancer used to be overwhelming, but Apex Finances made it effortless.",
    location:"Ontario, Canada",
    locationTwo:"Austin, Texas",
    image:Staff
},
{
    name: "Markus N., 31 years old",
    oneJob:"Frontend Developer",
    twoJob:"Commercial Photographer",
    threeJob:"Stylist",
    message:"I used to worry about missing deductions, but with Apex Finance, I know i'm maximizing my savings.",
    location:"Ontario, Canada",
    locationTwo:"Austin, Texas",
    image:StaffTwo

},
{
    name: "Oreoluwa O.O, 26 years old",
    oneJob:"Frontend Developer",
    twoJob:"Commercial Photographer",
    threeJob:"Stylist",
    message:"From invoicing to tax prep, Apex Finance has been a game changer for my freelance business.",
    location:"Ontario, Canada",
    locationTwo:"Austin, Texas",
    image:Staff,
}
]

export const about = [
    {
        icon:folderIcon,
        title:"For Freelancers",
        subtitle:"Simplicity & Control",
        message:"Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love."
    },
        
    {
        icon:staffIcon,
        title:"For Families",
        subtitle:"Stability & Security",
        message:"From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly."
    },
    {
        icon:calcIcon,
        title:"For Small Businesses",
        subtitle:"Stability & Security",
        message:"Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business."
    }
]
export const onboarding = [
    {
        number: "1",
        title:"Our tax advisors write you a plan",
        subtitle:"Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
        image:pencil
    },
    {
        number: "2",
        title:"Onboard us to your finances",
        subtitle:"Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
        image:currency
    },
    {
        number: "3",
        title:"We solve the rest",
        subtitle:"Maintain organized financial records and provide clear reports to support business growth and financial health.",
        image:rubik
    }
]
export const philosophy = [
    {
        number:"01",
        message:"In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence."
    },
    {
        number:"02",
        message:"That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership."
    },
    {
        number:"03",
        message:"In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being."
    }
]