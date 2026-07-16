"use client";
import styles from "./requestForm.module.css"





import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
const ak = "https://d3r43jacxrwsrp.cloudfront.net/Rise/form/feedback/AK.png";
const kd = "https://d3r43jacxrwsrp.cloudfront.net/Rise/form/feedback/KD.png";
const pd = "https://d3r43jacxrwsrp.cloudfront.net/Rise/form/feedback/PD.png";
const band = "https://d3r43jacxrwsrp.cloudfront.net/Rise/form/band.png";

// const laptop = "https://d3r43jacxrwsrp.cloudfront.net/Rise/form/allLaptop.webp";
const productsIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/form/allProducts.png";
// import Accordion from "../../Components/Accordian/Accordian"

import FooterLower from "../../Components/Footer/FooterLower"

import { FaArrowRightLong } from "react-icons/fa6";
import Certificate from "../../Components/Certificate/Certificate";

import axios from "axios";
import { createPortal } from "react-dom";
import COUNTRIES from "./countryList";
const successIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/common/success.svg";
const errorIcon = "https://d3r43jacxrwsrp.cloudfront.net/Rise/common/error.svg";


export default function RequestForm() {
const [popup, setPopup] = useState({
  show: false,
  message: "",
});

const [product, setProduct] = useState("unknown");

    const [isPhone, setIsPhone] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 800);

        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect(() => {

    //     const previousBodyOverflow = document.body.style.overflow;
    //     const previousBodyPosition = document.body.style.position;
    //     const previousBodyTop = document.body.style.top;
    //     const previousBodyWidth = document.body.style.width;
    //     const previousHtmlOverflow = document.documentElement.style.overflow;
    //     const scrollY = window.scrollY;

    //     document.body.style.overflow = "hidden";
    //     document.body.style.position = "fixed";
    //     document.body.style.top = `-${scrollY}px`;
    //     document.body.style.width = "100%";
    //     document.documentElement.style.overflow = "hidden";

    //     return () => {
    //         document.body.style.overflow = previousBodyOverflow;
    //         document.body.style.position = previousBodyPosition;
    //         document.body.style.top = previousBodyTop;
    //         document.body.style.width = previousBodyWidth;
    //         document.documentElement.style.overflow = previousHtmlOverflow;
    //         window.scrollTo(0, scrollY);
    //     };
    // });


// useEffect(() => {

// }, []);
  

const [isEmbed, setIsEmbed] = useState(false);
useEffect(() => {
  const param = new URLSearchParams(window.location.search).get("embed");
  const stored = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("isEmbed") : null;
  setIsEmbed(param === "true" || stored === "true");
  setProduct(new URLSearchParams(window.location.search).get("product") || "unknown");
}, []);


const showLocalPopup = (type, message) => {
  setPopup({ show: true, type, message });
};

const rfDialogRef = useRef(null);
const rfOkBtnRef = useRef(null);

useEffect(() => {
  if (popup.show) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    setTimeout(() => rfOkBtnRef.current?.focus(), 0);
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }
  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };
}, [popup.show]);

const handleRfDialogKeyDown = (e) => {
  if (e.key === "Escape") {
    setPopup({ show: false, message: "" });
    return;
  }
  if (e.key === "Tab" && rfDialogRef.current) {
    const focusable = rfDialogRef.current.querySelectorAll(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      last.focus(); e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus(); e.preventDefault();
    }
  }
};

useEffect(() => {
  const param = new URLSearchParams(window.location.search).get("embed");

  if (param === "true") {
    sessionStorage.setItem("isEmbed", "true");
    setIsEmbed(true);
  }
  let lastHeight = 0;

// const sendHeight = () => {
// //   const newHeight = document.documentElement.scrollHeight;

// const newHeight = Math.max(
//   document.body.scrollHeight,
//   document.documentElement.scrollHeight,
//   document.body.offsetHeight,
//   document.documentElement.offsetHeight,
//   document.body.clientHeight,
//   document.documentElement.clientHeight
// );
//   // 🔥 Only send if difference is meaningful
//   if (Math.abs(newHeight - lastHeight) > 50) {
//     lastHeight = newHeight;

//     window.parent.postMessage(
//       { type: "SET_HEIGHT", height: newHeight },
//       "*"
//     );
//   }
// };

  // Initial


const sendHeight = () => {   
  const newHeight = document.body.getBoundingClientRect().height;
  if (newHeight !== lastHeight) {
    lastHeight = newHeight;
  }

  window.parent.postMessage(
    { type: "SET_HEIGHT", height: Math.ceil(newHeight) },
    "*"
  );
};
  sendHeight();


  // Resize
  window.addEventListener("load", sendHeight);
if (typeof window !== "undefined") { window.addEventListener("resize", sendHeight); }
const images = document.images;
  for (let img of images) {
    if (!img.complete) {
      img.onload = sendHeight;
    }
  }

  // 🔥 IMPORTANT: observe DOM changes
  const observer = new ResizeObserver(() => {
    sendHeight();
   
  });

  observer.observe(document.body);

  return () => {
    window.removeEventListener("resize", sendHeight);
    observer.disconnect();
  };
}, []);

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            const img1 = new Image();
            const img2 = new Image();
            const img3 = new Image();

            img1.src = ak;
            img2.src = kd;
            img3.src = pd;

            Promise.all([
                new Promise((resolve) => (img1.onload = resolve)),
                new Promise((resolve) => (img2.onload = resolve)),
                new Promise((resolve) => (img3.onload = resolve)),
            ]).then(() => setImagesLoaded(true));
        };

        loadImages();
    }, []);


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [warnings, setWarnings] = useState({});

    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        role: '',
        email: '',
        phone: '',
        country: '',
        phoneCode: '',
        address: '',
        requirement: '',
        message: '',
        subscribe: false,
        policyAgree: false,
    });




    // useEffect(() => {
    //     const fetchConuntryList = async () => {

    //         try {
    //             let countryNames = await fetch("https://restcountries.com/v2/all")
    //             countryNames = await countryNames.json()
    //             const countryList = countryNames.map((country, index) => ({
    //                 label: country.name,
    //                 value: country.name,
    //                 code: country.callingCodes[0] || '',
    //                 flag: country.flag

    //             }));
    //             setCountries(countryList);

    //         } catch (error) {
    //             console.error('Error fetching country data:', error)
    //         }

    //     }
    //     fetchConuntryList()
    // }, []);



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
        if (name === "address" || name === "message") {
            setWarnings((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        if (name !== "address" && name !== "message") return;
        setWarnings((prev) => ({ ...prev, ...computeWarnings() }));
    };

    const handleCountrySelectChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            country: selectedOption ? selectedOption.name : "",
            phoneCode: selectedOption ? selectedOption.dialCode : "",
        }));
        setErrors((prev) => ({ ...prev, country: "", phoneCode: "" }));
    };

    // Gibberish/quality heuristics (per Request Demo Optimization spec):
    // real words almost always contain a vowel; keyboard-mash strings usually don't.
    const hasVowel = (v) => /[aeiouAEIOU]/.test(v);
    const isRepeatingOrSequential = (digits) => {
        if (/^(\d)\1{9}$/.test(digits)) return true; // 0000000000
        const ascending = "01234567890123456789";
        const descending = "98765432109876543210";
        return ascending.includes(digits) || descending.includes(digits);
    };

    const FREE_EMAIL_DOMAINS = /@(gmail\.|yahoo\.|outlook\.|hotmail\.|live\.|icloud\.|aol\.|protonmail\.|zoho\.|rediffmail\.|yandex\.|gmx\.|mail\.com)/i;

    const validators = {
        name: (v) => {
            if (!v.trim()) return "Name is required";
            if (!/^[A-Za-z][A-Za-z.'\- ]{1,59}$/.test(v)) return "Please enter your full name using letters only.";
            if (!hasVowel(v)) return "Please enter your full name using letters only.";
            if (!v.trim().includes(" ")) return "Please enter your full name (first and last).";
            return "";
        },
        companyName: (v) => {
            if (!v.trim()) return "Company name is required";
            if (!/^[A-Za-z0-9][A-Za-z0-9.,&'\- ]{1,99}$/.test(v)) return "Please enter your company's registered or trading name.";
            if (!hasVowel(v)) return "Please enter your company's registered or trading name.";
            return "";
        },
        role: (v) => {
            if (!v.trim()) return ""; // optional field
            if (!/^[A-Za-z0-9][A-Za-z0-9.,&'/\- ]{1,49}$/.test(v)) return "Please select your role, or describe it briefly.";
            if (!hasVowel(v)) return "Please select your role, or describe it briefly.";
            return "";
        },
        email: (v) => {
            if (!v.trim()) return "Email is required";
            if (v.length < 5 || v.length > 254) return "Please use your official work email address, not a personal one like Gmail or Yahoo.";
            if (!/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(v)) return "Enter a valid email address";
            if (FREE_EMAIL_DOMAINS.test(v)) return "Please use your official work email address, not a personal one like Gmail or Yahoo.";
            return "";
        },
        phoneCode: (v) => {
            if (!v.trim()) return "Country code is required";
            if (!/^[0-9]{1,4}$/.test(v)) return "Enter a valid country code (1-4 digits)";
            return "";
        },
        phone: (v) => {
            if (!v.trim()) return "Phone number is required";
            if (!/^[6-9]\d{9}$/.test(v)) return "Please enter a valid 10-digit mobile number.";
            if (isRepeatingOrSequential(v)) return "Please enter a valid 10-digit mobile number.";
            return "";
        },
        country: (v) => (v.trim() ? "" : "Please select your country from the list."),
        address: (v) => (v.trim() ? "" : "Address is required"),
        requirement: (v) => (v.trim() ? "" : "Please select what you're interested in."),
    };

    // Soft checks — shown as non-blocking hints, never prevent submission.
    const computeWarnings = () => {
        const w = {};
        const addr = formData.address.trim();
        if (addr && (addr.length < 8 || !hasVowel(addr))) {
            w.address = "Please enter a more complete address.";
        }
        const msg = formData.message.trim();
        if (msg && msg.length > 6) {
            const vowelCount = (msg.match(/[aeiouAEIOU]/g) || []).length;
            if (vowelCount / msg.length < 0.2) {
                w.message = "This message looks unclear — feel free to add more detail.";
            }
        }
        return w;
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(validators).forEach((key) => {
            const msg = validators[key](String(formData[key] ?? ""));
            if (msg) newErrors[key] = msg;
        });
        if (!formData.policyAgree) newErrors.policyAgree = "You must agree to the privacy policy";
        return newErrors;
    };



    // const handleSelectChange = (selectedOption) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         country: selectedOption ? selectedOption.value : '',

    //     }));
    // };



    // const handleCountryCodeChange = (selectedOption) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         phoneCode: selectedOption ? selectedOption.code : '',
    //     }));
    // };


    // const handleSubmit_v = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);


    //     if (!formData.subscribe || !formData.policyAgree) {
    //         alert("Please agree to the terms and conditions before submitting.");
    //         return;
    //     }

    //     const dataToSend = {
    //         name: formData.name,
    //         companyName: formData.companyName,
    //         role: formData.role,
    //         email: formData.email,
    //         phone: formData.phone,
    //         phoneCode: formData.phoneCode,
    //         country: formData.country,
    //         address: formData.address,
    //         requirement: formData.requirement,
    //         message: formData.message,

    //     };

    //     console.log(dataToSend)
    //     // return

    //     try {

    //         let host = "https://rise.eicetechnology.com/contact.php"
    //         // let local = "http://localhost/eicerise/contact.php"

    //         const response = await fetch(host, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(dataToSend),
    //         });



    //         if (response.status === 200) {
    //             setSuccessMsg("Your form has been submitted successfully.");
    //             setFormData({
    //                 name: "",
    //                 companyName: "",
    //                 role: "",
    //                 email: "",
    //                 phone: "",
    //                 phoneCode: "",
    //                 country: "",
    //                 address: "",
    //                 requirement: "",
    //                 message: ""
    //             });
    //         } else {
    //             alert("Failed to submit the form. Please try again.");
    //         }

    //     } catch (error) {
    //         console.error("Error submitting form:", error);
    //         alert("An error occurred. Please try again.");
    //     }

    //     finally {
    //         setIsSubmitting(false); // re-enable button
    //     }
    // };


   

const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    setErrors({});
    setWarnings(computeWarnings());
    setIsSubmitting(true);

    const dataToSend = {
        name: formData.name,
        companyName: formData.companyName,
        role: formData.role,
        email: formData.email,
        phone: formData.phone,
        phoneCode: formData.phoneCode,
        country: formData.country,
        address: formData.address,
        requirement: formData.requirement,
        message: formData.message,
        product: product,
    };

    try {
        const response = await axios.post("/api/contact", dataToSend);

        if (response.status === 200) {
            showLocalPopup("success", "Form submitted successfully!");
            setFormData({
                name: "",
                companyName: "",
                role: "",
                email: "",
                phone: "",
                phoneCode: "",
                country: "",
                address: "",
                requirement: "",
                message: "",
                subscribe: false,
                policyAgree: false,
            });
        } else {
            showLocalPopup("error", "Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        showLocalPopup("error", "Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};




    const feedBackArray = [
        {
            img: kd,
            client: "Kevin Droid",
            position: "Operations Manager",
            company: ", Zenith Hospitality",
            heading: "Transformative Technology Partner !",
            para: "The Enterprise Suite has streamlined our operations like never before. From payroll management to inventory tracking, every module is perfectly tailored to our needs. The support team is outstanding and always ready to help. Highly recommended!",
            key: 1
        },
        {
            img: pd,
            client: "Priya Desai",
            position: "Owner",
            company: ", Gourmet haven",
            heading: "Exceptional Efficiency and Customization!",
            para: "The POS Suite has revolutionized our customer experience. The integration with accounts and finance has made tracking and reporting seamless. It's an invaluable tool for any growing business.",
            key: 2
        },
        {
            img: ak,
            client: "Amit Khanna",
            position: "CEO",
            company: ",Elite Club International",
            heading: "Impressive All-In-One Solution !",
            para: "Switching to the Club Suite was the best decision for our membership-driven business. The member portal and room service modules work flawlessly, saving us countless hours each week. We couldn't be happier!",
            key: 3
        }
    ];


    const [feedBackArrayIndex, setfeedBackArrayIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setfeedBackArrayIndex((prevIndex) =>
                prevIndex === feedBackArray.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    const query = [
        {
            key: 1,
            question: "Q :  What will the demo include?",
            answer: "A : Our demo will provide a comprehensive walk-through of the selected suite or modules, tailored to your business needs. You'll see how the solution works in real-time and learn about its key features and benefits."
        },
        {
            key: 2,
            question: "Q : How long does the demo take?",
            answer: "A : A typical demo lasts between 30 to 45 minutes, depending on the number of suites or modules you'd like to explore."
        },
        {
            key: 3,
            question: "Q : Can I customize the demo based on my business requirements?",
            answer: "A : Absolutely! During the request, let us know your specific needs, and we'll tailor the demo to address them."
        },

    ];


    // const [feedbackIndex, setFeedbackIndex] = useState(0);



    // let startX = 0;
    // let startY = 0;

    // const handleTouchStart = (e) => {
    //     const touch = e.touches[0];
    //     startX = touch.clientX;
    //     startY = touch.clientY;
    // };


    // const handleFeedbackChange = (e) => {

    //     const touch = e.touches[0];
    //     const deltaX = touch.clientX - startX;
    //     const deltaY = touch.clientY - startY;

    //     if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //         if (deltaX > 0) {
    //             //right
    //             setFeedbackIndex((prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length);

    //         } else {
    //             //left
    //             setFeedbackIndex((prevIndex) => (prevIndex + 1) % feedback.length);

    //         }
    //     } else {
    //         if (deltaY > 0) {
    //             //down
    //         } else {
    //             //up
    //         }
    //     }



    // }



    // const customStyles = {
    //     control: (provided) => ({
    //         ...provided,
    //         paddingTop: '3px',
    //         paddingBottom: '3px',
    //         // width: '33rem',
    //     }),
    //     menu: (provided) => ({
    //         ...provided,
    //         paddingTop: '5px',
    //         paddingBottom: '3px',
    //         // width: '33rem',
    //     }),
    // };



    const customStyles2 = {
        control: (provided) => ({
            ...provided,
            paddingTop: '3px',
            paddingBottom: '3px',
            // width: '31rem',
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: '5px',
            paddingBottom: '3px',
            // width: '31rem',
        }),
    };



    const options = [
        { value: 'Product Details or Demo', label: 'Product Details or Demo' },
        { value: 'Product Pricing', label: 'Product Pricing' },
        { value: 'Support or Training', label: 'Support or Training' },
    ];


const handleSelectChange2 = (selectedOption) => {
        handleChange({
            target: {
                name: 'requirement',
                value: selectedOption ? selectedOption.value : '',
                type: 'text',
            },
        });
    };

    return (
        <>
{popup.show && createPortal(
  <div
    aria-hidden="true"
    onClick={() => setPopup({ show: false, message: "" })}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99999
    }}
  >
    <div
      ref={rfDialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rf-dialog-title"
      onKeyDown={handleRfDialogKeyDown}
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "25px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        position: "relative"
      }}
    >
      <button
        onClick={() => setPopup({ show: false, message: "" })}
        aria-label="Close dialog"
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          cursor: "pointer",
          fontSize: "18px",
          background: "none",
          border: "none",
          padding: 0,
          lineHeight: 1,
        }}
      >
        ×
      </button>

      <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: popup.type === "success" ? "#ffffff" : "#dc3545",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto 15px",
      }}>
        <img
          src={popup.type === "success" ? successIcon : errorIcon}
          alt={popup.type === "success" ? "Success" : "Error"}
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      <h3 id="rf-dialog-title" style={{ marginBottom: "10px" }}>
        {popup.type === "success" ? "Success" : "Error"}
      </h3>

      <p style={{ fontSize: "14px", marginBottom: "20px" }}>
        {popup.message}
      </p>

      <button
        ref={rfOkBtnRef}
        onClick={() => setPopup({ show: false, message: "" })}
        style={{
          background: "#012060",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        OK
      </button>
    </div>
  </div>,
  document.body
)}
            <div className={`${styles.formHeadingBox}`}>
                <div className={`${styles.formHeading}`}> <span className="font2 blueTextGlobalClass">Get in touch</span> <span style={{ fontWeight: "700" }} className="font3"> with us</span></div>
                <div className={`${styles.formSubheading} font4`}>Fill out the form below, and we'll get back to you shortly</div>
            </div>

            <div className={`${styles.formContainer} font1`}>
        
                <form onSubmit={handleSubmit}>

                    <div className={`${styles.FormInnerHeading}`}>
                        Add Your Information
                    </div>

                    <div className={`${styles.line1}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-name">Name*</label>
                            <div>
                                <input id="rf-name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "rf-name-error" : undefined} placeholder="Enter your name" autoComplete="off" required className={`${styles.line1Input}`} type="text" name="name" value={formData.name} onChange={handleChange} />
                                {errors.name && <span id="rf-name-error" className={styles.fieldError}>{errors.name}</span>}
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-companyName">Company Name*</label>
                            <div>
                                <input id="rf-companyName" aria-invalid={!!errors.companyName} aria-describedby={errors.companyName ? "rf-companyName-error" : undefined} placeholder="Enter your company name" autoComplete="off" required className={`${styles.line1Input}`} type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                                {errors.companyName && <span id="rf-companyName-error" className={styles.fieldError}>{errors.companyName}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.line2}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-role">Role/Designation (optional)</label>
                            <div>
                                <input id="rf-role" aria-invalid={!!errors.role} aria-describedby={errors.role ? "rf-role-error" : undefined} autoComplete="off" placeholder="Enter Your Role ( e.g Manager , Director)" className={`${styles.line2Input}`} type="text" name="role" value={formData.role} onChange={handleChange} />
                                {errors.role && <span id="rf-role-error" className={styles.fieldError}>{errors.role}</span>}
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-email">Email ID*</label>
                            <div>
                                <input id="rf-email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "rf-email-error" : undefined} placeholder="Enter Your Bussiness Email Address" autoComplete="off" required className={`${styles.line2Input}`} type="email" name="email" value={formData.email} onChange={handleChange} />
                                {errors.email && <span id="rf-email-error" className={styles.fieldError}>{errors.email}</span>}
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-phone">Phone Number*</label>
                            <div className={`${styles.phoneNoAndCodeBox}`}>
                                <div >
                                    {/* <Select
                                        className={`${styles.phoneCode}`}
                                        id="countryCode"
                                        placeholder="Code"
                                        options={countries.map(country => ({
                                            label: `+${country.code}`,
                                            value: country.value,
                                            code: country.code,
                                        }))}
                                        isSearchable={true}
                                        styles={customStyles2}

                                        value={countries.find(option => option.code === formData.phoneCode) ? {
                                            label: `+${formData.phoneCode}`,
                                            value: formData.phoneCode
                                        } : null}
                                        onChange={handleCountryCodeChange}
                                    /> */}

                                    <input id="rf-phoneCode" aria-label="Phone country code" aria-invalid={!!errors.phoneCode} aria-describedby={errors.phoneCode ? "rf-phoneCode-error" : undefined} placeholder="Code" autoComplete="off" required className={`${styles.phoneCode}`} type="tel" name="phoneCode" value={formData.phoneCode} onChange={handleChange} maxLength={4} pattern="[0-9]{1,4}" />
                                    {errors.phoneCode && <span id="rf-phoneCode-error" className={styles.fieldError}>{errors.phoneCode}</span>}
                                </div>
                                <div className={`${styles.phoneNoInputBox}`}>
                                    <input id="rf-phone" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "rf-phone-error" : undefined} placeholder="Enter Your Phone No" autoComplete="off" required className={`${styles.phoneNo}`} type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" />
                                </div>
                            </div>
                            {errors.phone && <span id="rf-phone-error" className={styles.fieldError}>{errors.phone}</span>}

                            {/* <div>
                                <input
                                    placeholder="Enter Your Phone Number"
                                    autoComplete="off"
                                    required
                                    className={`${styles.line2Input}`}
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit phone number"
                                />
                            </div> */}

                        </div>
                    </div>

                    <div className={`${styles.line3}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-country">Country*</label>
                            <div>
                                <Select
                                    inputId="rf-country"
                                    name="country"
                                    options={COUNTRIES}
                                    getOptionLabel={(o) => o.name}
                                    getOptionValue={(o) => o.iso2}
                                    value={COUNTRIES.find((c) => c.name === formData.country) || null}
                                    onChange={handleCountrySelectChange}
                                    className={styles.line3Input}
                                    placeholder="Select your country"
                                    styles={customStyles2}
                                    aria-invalid={!!errors.country}
                                    aria-describedby={errors.country ? "rf-country-error" : undefined}
                                />
                                {errors.country && <span id="rf-country-error" className={styles.fieldError}>{errors.country}</span>}
                            </div>

                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="rf-address">Address*</label>
                            <div>
                                <input id="rf-address" aria-invalid={!!errors.address} aria-describedby={errors.address ? "rf-address-error" : "rf-address-warning"} placeholder="Enter Your Address" autoComplete="off" required className={`${styles.line3Input}`} type="text" name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} />
                                {errors.address && <span id="rf-address-error" className={styles.fieldError}>{errors.address}</span>}
                                {!errors.address && warnings.address && <span id="rf-address-warning" className={styles.fieldError}>{warnings.address}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.requirement} ${styles.inputContainer} `}>
                        <label htmlFor="requirement">Requirement*</label>
                        <div>


                            {/* <select
                                id="requirement"
                                name="requirement"
                                required
                                className={`${styles.requirementInput}`}
                                value={formData.requirement}
                                onChange={handleChange}
                            >
                                <option value="">-- Please Select --</option>
                                <option value="Product Details or Demo">Product Details or Demo</option>
                                <option value="Product Pricing">Product Pricing</option>
                                <option value="Support or Training">Support or Training</option>
                            </select> */}

                            <Select
                                inputId="requirement"
                                name="requirement"
                                options={options}
                                value={options.find(option => option.value === formData.requirement)}
                                onChange={handleSelectChange2}
                                className={styles.requirementInput}
                                placeholder="-- Please Select --"
                                styles={customStyles2}
                            />
                            {errors.requirement && <span className={styles.fieldError}>{errors.requirement}</span>}

                        </div>
                    </div>

                    <div className={`${styles.messageTextArea}  ${styles.inputContainer} `}>
                        <div>
                            <label htmlFor="rf-message">Message:</label>
                        </div>
                        <div>
                            <textarea
                                id="rf-message"
                                className={`${styles.messageTextAreaInput} font1`}
                                rows="5"
                                placeholder="Write your message here"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-describedby={warnings.message ? "rf-message-warning" : undefined}
                            />
                            {warnings.message && <span id="rf-message-warning" className={styles.fieldError}>{warnings.message}</span>}
                        </div>
                    </div>

                    <div className={`${styles.checkBoxContainer}`}>
                        <div className={`${styles.checkBox}`}>
                            <input
                                type="checkbox"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}

                            />
                            <span className={`${styles.checkBoxNote}`}>Recieve EICE Technology Products, Services, Events and more</span>
                        </div>

                        <div className={`${styles.checkBox}`}>
                            <input
                                required
                                type="checkbox"
                                name="policyAgree"
                                checked={formData.policyAgree}
                                onChange={handleChange}
                                aria-invalid={!!errors.policyAgree}
                                aria-describedby={errors.policyAgree ? "rf-policyAgree-error" : undefined}
                            />
                            <span className={`${styles.checkBoxNote}`}>I have agreed to EICE Technology Privacy policy</span>
                        </div>
                        {errors.policyAgree && <span id="rf-policyAgree-error" className={styles.fieldError}>{errors.policyAgree}</span>}
                    </div>

                    <div className={`${styles.submitButtonConatiner}`}>
                        <div className={`${styles.buttonbox}`}>
                            {/* <input
                                required
                                type="submit"

                                className={`${styles.buttonInputBox} font3`}

                            /> */}

                            <input
                                required
                                type="submit"
                                disabled={isSubmitting}
                                className={`${styles.buttonInputBox} font3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            />


                            <div className={`${styles.demoArrowButton}`}>

                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* 
            {isPhone ? (<div className={`${styles.reviewSectionForPhone}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.clientHeading} font3`}>
                        What our clients say  ?
                    </div>

                    <main className={`${styles.feedBack}`}>




                        <article className={`${styles.cardContainer} font1`}>
                            <div className={styles.card}>

                                {imagesLoaded && (
                                    <div style={{ textAlign: "center" }}  >
                                        <img style={{ width: "28%" }} src={feedBackArray[feedBackArrayIndex].img?.src || feedBackArray[feedBackArrayIndex].img} alt="" />
                                    </div>)}


                                <div className={`${styles.clientInfo}`} > <span >-- {feedBackArray[feedBackArrayIndex].client} ,</span> <span style={{ fontWeight: "bold" }} >{feedBackArray[feedBackArrayIndex].position}</span>  <span>{feedBackArray[feedBackArrayIndex].company}</span></div>

                                <div className={`${styles.quoteHeading} blueTextGlobalClass font3`}>
                                    "{
                                        feedBackArray[feedBackArrayIndex].heading
                                    }"
                                </div>

                                <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{feedBackArray[feedBackArrayIndex].para}</p>

                            </div>
                        </article>
                    </main>


                    <div className="indicators">
                        {feedBackArray.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${feedBackArrayIndex === index ? 'active' : ''}`}
                                onClick={() => setfeedBackArrayIndex(index)}
                            ></span>
                        ))}
                    </div>


                </section>
            </div>)

                :

                (

                    <div className={`${styles.reviewSection}`}>
                        <section className={`${styles.section5} globalSectionSize`}>

                            <div className={`${styles.section5Heading} font1`}>

                                <div className="font3">
                                    What our clients say  ?
                                </div>

                            </div>


                            <main className={`${styles.feedBack}`}>
                                {feedBackArray.map((item, index) =>
                                (
                                    <article key={item.key ?? index} className={`${styles.feedBackArticleBox} font1`} >

                                        <figure >

                                            <div style={{ textAlign: "center" }}  >
                                                <img style={{ width: "28%" }} src={item.img?.src || item.img} alt={item.name || ""} />
                                            </div>

                                            <figcaption style={{ textAlign: "center", fontSize: "13px" }} > <span >--{item.client} ,</span> <span style={{ fontWeight: "bold" }}>{item.position}</span> <span>{item.company}</span></figcaption>

                                        </figure>
                                        <div className={`${styles.quoteHeading} blueTextGlobalClass font3`}>
                                            {
                                                item.heading
                                            }
                                        </div>
                                        <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{item.para}</p>

                                    </article>
                                ))}
                            </main>


                        </section>
                    </div>

                )}






            <section >
                <div className={`${styles.FAQsection} globalSectionSize font4`}>
                    <div className={`${styles.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={styles.FAQContainer}>
                        {query.map((item, index) => (
                            <Accordion key={item.key ?? index} question={item.question} answer={item.answer} />
                        ))}
                    </div>

                </div>
            </section> */}



            {isPhone ? (<section className={`${styles.contactUsBackgroundPhone}`}>
                <div className={`${styles.ContactUsSectionPhone} globalSectionSize  `}>

                    <div className={`${styles.contactUsHeading} font3`}>
                        Contact Us
                    </div>

                    <div className={`${styles.contactUsBoxPhone} font1 `}>

                        <div className={`${styles.contactSubBox1}`}>
                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3`}>Email </div>
                                <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                            </div>

                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3`}>Address (India) </div>
                                <div className={`${styles.value} font1 `}>6th floor, Platina Heights , C-24   </div>
                                <div className={`${styles.value} font1 `}> Sector 62, Noida, Uttar Pradesh 201301</div>

                            </div>
                        </div>


                        <div className={`${styles.contactSubBox1}`}>

                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3 `}>Phone no </div>
                                <div className={`${styles.value} font1 `}> +91 120 311 0836</div>

                            </div>

                            <div className={`${styles.contactDetailBox}`} >
                                <div className={`${styles.key} font3`}>Address (USA) </div>
                                <div className={`${styles.value} font1 `}>440 Cobia Drive, #901 </div>
                                <div className={`${styles.value} font1 `}>katy, Texas 77494</div>

                            </div>
                        </div>




                    </div>

                </div>
            </section>) : (<section className={`${styles.contactUsBackground}`}>
                <div className={`${styles.ContactUsSection} globalSectionSize  `}>

                    <div className={`${styles.contactUsHeading} font3`}>
                        Contact Us
                    </div>

                    <div className={`${styles.contactUsBox} font1 `}>

                        <div >

                            <div className={`${styles.key} font3`}>Email :</div>
                            <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3 `}>Phone no :</div>
                            <div className={`${styles.value} font1 `}>+91 120 311 0836</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3`}>Address (India) </div>
                            <div className={`${styles.value} font1 `}>6th floor, Platina Heights , C-24   </div>
                            <div className={`${styles.value} font1 `}> Sector 62, Noida, Uttar Pradesh 201301</div>


                        </div>
                        <div >

                            <div className={`${styles.key} font3`}>Address (USA) :</div>
                            <div className={`${styles.value} font1 `}> 11011 Richmond Ave, Suite 715   </div>
                            <div className={`${styles.value} font1 `}>Houston, TX 77042</div>

                        </div>


                    </div>

                </div>
            </section>)}


            <section className={`${styles.centerWrapper}`} style={{
    background: `url(${band}) no-repeat center`,
    backgroundSize: "100% 50%",
    backgroundPosition: "center calc(50% + 25px)",
  }}>

                <div className={`${styles.LaptopImg}`}>
                    <img src={productsIcon} alt="footer" />
                </div>
            </section>

            {/* <section className={`${styles.LaptopImgSectionPhone}`}>
                <div className={`${styles.LaptopImgPhone}`}>

                </div>
            </section> */}
            <Certificate />
            {!isEmbed && <FooterLower />}
        </>
    );
}

