import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "resume": "Resume",
        "contact": "Contact"
      },
      "hero": {
        "hello": "Hi there, I'm",
        "role": "Mechanical Engineering Candidate",
        "subtitle": "| Mechanical and Industrial Engineering(GIM)",
        "description": "I am a highly motivated fourth-year Mechanical Engineering student at the Institute of Technology of Cambodia (ITC), with a solid foundation in mechanical design, thermodynamics, and manufacturing systems. I am driven by a passion for solving complex engineering challenges and enhancing system performance. Through academic projects and hands-on experience, I have strengthened my analytical abilities and technical competencies. I am dedicated to continuous learning and aspire to contribute to innovative, efficient, and sustainable engineering solutions.",
        "contact_btn": "Contact Me",
        "resume_btn": "View Resume"
      },
      "about": {
        "title1": "About",
        "title2": "Me",
        "story_title": "My Story",
        "story_p1": "Hello! I am Savean Socheata, an enthusiastic Mechanical Engineer based in Cambodia. I have a strong foundation in mechanical design, thermodynamics, and manufacturing processes.",
        "story_p2": "When I am not designing blueprints or simulating CAD models, you can find me exploring new industrial technologies and robotics.",
        "details_title": "Personal Details",
        "name": "Name",
        "experience": "Experience",
        "location": "Location",
        "email": "Email",
        "location_val": "Phnom Penh, Cambodia",
        "exp_val": "3+ Years"
      },
      "resume": {
        "title1": "My",
        "title2": "Resume",
        "exp": "Experience",
        "edu": "Education",
        "skills": "Professional Skills",
        "job1_date": "2022 - Present",
        "job1_title": "Senior Mechanical Engineer",
        "job1_company": "Industrial Tech Solutions",
        "job1_desc": "Lead the mechanical design team for heavy machinery. Improved manufacturing efficiency by 30% using advanced CAD and FEA simulations.",
        "job2_date": "2020 - 2022",
        "job2_title": "Mechanical CAD Designer",
        "job2_company": "AutoMech Factory",
        "job2_desc": "Created 3D models and 2D drafting for automation assembly lines using SolidWorks and AutoCAD.",
        "edu1_date": "2016 - 2020",
        "edu1_title": "Bachelor of Mechanical Engineering",
        "edu1_school": "Institute of Technology of Cambodia (ITC)",
        "edu1_desc": "Graduated with Honors. Specialized in industrial design and thermodynamics.",
        "edu2_date": "2019",
        "edu2_title": "Advanced SolidWorks Certification",
        "edu2_school": "Engineering Training Center",
        "edu2_desc": "Completed a rigorous course in advanced 3D modeling and structural analysis."
      },
      "contact": {
        "title1": "Get in",
        "title2": "Touch",
        "collab": "Let's work together!",
        "desc": "I am open to new mechanical engineering opportunities or freelance design projects. Feel free to contact me for any engineering consultation or collaboration.",
        "label_name": "Name",
        "label_email": "Email",
        "label_message": "Message",
        "placeholder_name": "Your Name",
        "placeholder_msg": "How can I help you?",
        "send": "Send Message",
        "alert": "Thank you for reaching out!"
      },
      "footer": {
        "rights": "All rights reserved.",
        "built": "Built with React & Tailwind CSS"
      }
    }
  },
  km: {
    translation: {
      "nav": {
        "home": "ទំព័រដើម",
        "about": "អំពីខ្ញុំ",
        "resume": "ប្រវត្តិរូប",
        "contact": "ទំនាក់ទំនង"
      },
      "hero": {
        "hello": "សួស្តី ខ្ញុំគឺ",
        "role": "បេក្ខជនវិស្វកម្មមេកានិក",
        "subtitle": "| វិស្វកម្មមេកានិក និងឧស្សាហកម្ម(GIM)",
        "description": "ខ្ញុំជានិស្សិតឆ្នាំទី៤ ផ្នែកវិស្វកម្មមេកានិក ដែលមានការលើកទឹកចិត្តខ្ពស់ នៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC) ដោយមានមូលដ្ឋានគ្រឹះរឹងមាំលើការរចនាមេកានិក កម្តៅ (thermodynamics) និងប្រព័ន្ធផលិតកម្ម។ ខ្ញុំមានចំណង់ចំណូលចិត្តក្នុងការដោះស្រាយបញ្ហាវិស្វកម្មស្មុគស្មាញ និងពង្រឹងប្រសិទ្ធភាពប្រព័ន្ធ។ តាមរយៈគម្រោងសិក្សា និងបទពិសោធន៍ផ្ទាល់ ខ្ញុំបានពង្រឹងសមត្ថភាពវិភាគ និងជំនាញបច្ចេកទេសរបស់ខ្ញុំ។ ខ្ញុំប្តេជ្ញាបន្តការសិក្សារៀនសូត្រឥតឈប់ឈរ និងប្រាថ្នាចង់ចូលរួមចំណែកដល់ការបង្កើតដំណោះស្រាយវិស្វកម្មប្រកបដោយភាពច្នៃប្រឌិត ប្រសិទ្ធភាព និងនិរន្តរភាព។",
        "contact_btn": "ទាក់ទងមកខ្ញុំ",
        "resume_btn": "មើលប្រវត្តិរូប"
      },
      "about": {
        "title1": "អំពី",
        "title2": "ខ្ញុំ",
        "story_title": "ប្រវត្តិសង្ខេប",
        "story_p1": "ជម្រាបសួរ! ខ្ញុំឈ្មោះ សាវាន សុជាតា ជាវិស្វករមេកានិកម្នាក់នៅកម្ពុជា។ ខ្ញុំមានមូលដ្ឋានគ្រឹះរឹងមាំលើការរចនាមេកានិក កម្តៅ (Thermodynamics) និងដំណើរការផលិតកម្ម។",
        "story_p2": "នៅពេលទំនេរ ខ្ញុំចូលចិត្តស្វែងយល់ពីបច្ចេកវិទ្យាឧស្សាហកម្មថ្មីៗ និងប្រព័ន្ធមនុស្សយន្ត (Robotics)។",
        "details_title": "ព័ត៌មានផ្ទាល់ខ្លួន",
        "name": "ឈ្មោះ",
        "experience": "បទពិសោធន៍",
        "location": "ទីតាំង",
        "email": "អ៊ីមែល",
        "location_val": "ភ្នំពេញ, កម្ពុជា",
        "exp_val": "៣ ឆ្នាំឡើង"
      },
      "resume": {
        "title1": "ប្រវត្តិ",
        "title2": "រូប",
        "exp": "បទពិសោធន៍",
        "edu": "ការអប់រំ",
        "skills": "ជំនាញវិជ្ជាជីវៈ",
        "job1_date": "២០២២ - បច្ចុប្បន្ន",
        "job1_title": "វិស្វករមេកានិកជាន់ខ្ពស់",
        "job1_company": "Industrial Tech Solutions",
        "job1_desc": "ដឹកនាំក្រុមរចនាមេកានិកសម្រាប់គ្រឿងចក្រធុនធ្ងន់។ បានជួយបង្កើនប្រសិទ្ធភាពផលិតកម្ម ៣០% តាមរយៈការប្រើប្រាស់ CAD ទំនើប។",
        "job2_date": "២០២០ - ២០២២",
        "job2_title": "អ្នកគូរប្លង់មេកានិក (CAD)",
        "job2_company": "AutoMech Factory",
        "job2_desc": "បង្កើតម៉ូដែល 3D និងប្លង់ 2D សម្រាប់ខ្សែសង្វាក់ស្វ័យប្រវត្តិកម្មដោយប្រើ SolidWorks និង AutoCAD។",
        "edu1_date": "២០១៦ - ២០២០",
        "edu1_title": "បរិញ្ញាបត្រវិស្វកម្មមេកានិក",
        "edu1_school": "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (សាលាតិចណូ)",
        "edu1_desc": "បញ្ចប់ការសិក្សាដោយទទួលបាននិទ្ទេសល្អ។ ផ្តោតសំខាន់លើរចនាបទឧស្សាហកម្ម។",
        "edu2_date": "២០១៩",
        "edu2_title": "វិញ្ញាបនបត្រ SolidWorks កម្រិតខ្ពស់",
        "edu2_school": "មជ្ឈមណ្ឌលបណ្តុះបណ្តាលវិស្វកម្ម",
        "edu2_desc": "បញ្ចប់វគ្គសិក្សាស៊ីជម្រៅលើការគូរម៉ូដែល 3D និងការវិភាគរចនាសម្ព័ន្ធ។"
      },
      "contact": {
        "title1": "ទំនាក់ទំនង",
        "title2": "ខ្ញុំ",
        "collab": "តោះសហការគ្នា!",
        "desc": "ខ្ញុំបើកចំហរសម្រាប់ការងារជាវិស្វករពេញម៉ោង និងគម្រោងគំនូរប្លង់ក្រៅម៉ោងផងដែរ។ សូមឆាតមកខ្ញុំបានដោយសេរី។",
        "label_name": "ឈ្មោះ",
        "label_email": "អ៊ីមែល",
        "label_message": "សារ",
        "placeholder_name": "វាយបញ្ចូលឈ្មោះរបស់អ្នក",
        "placeholder_msg": "តើខ្ញុំអាចជួយអ្វីអ្នកបានទេ?",
        "send": "បញ្ជូនសារ",
        "alert": "អរគុណសម្រាប់ការទាក់ទងមកកាន់យើង!"
      },
      "footer": {
        "rights": "រក្សាសិទ្ធិគ្រប់យ៉ាង",
        "built": "បង្កើតឡើងដោយ React & Tailwind CSS"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'km', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
