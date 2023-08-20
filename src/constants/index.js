import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  bs,
  figma,
  docker,
  meta,
  starbucks,
  globaleur,
  tesla,
  dvc,
  qi,
  shopify,
  codepath,
  carrent,
  bullet_journal,
  movie,
  jobit,
  tripguide,
  threejs,
  rdc,
  yinyang,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Full-stack Developer",
    icon: backend,
  },
  {
    title: "XR developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "bootstrap",
    icon: bs,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Globaleur",
    icon: globaleur,
    iconBg: "#383E56",
    date: "May 2019 - Jun 2019",
    points: [
      "Analyzed customer requirements, visualize it and meet with leaders regularly to discuss solutions for customers.",
      "Performed tasks such as extracting data from database to an excel, or manipulation of data to generate insights.",
      "Implemented Python algorithms and math models processed data and predicted traveler behaviors by demographics.",
    ],
  },
  {
    title: "Tutor",
    company_name: "Diablo Valley College",
    icon: dvc,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Dec 2019",
    points: [
      "Designed hands-on practice and skill-building opportunities for students through project-based assignments.",
      "Guided students through various steps such as brainstorming, researching, outlining, writing, revising, and publishing.",
      "Hosted workshops to illustrate how concepts in Math can be applied to other fields like Computer Science and Physics.",
    ],
  },
  {
    title: "Research/Software Engineer Intern",
    company_name: "Qualcomm Institute",
    icon: qi,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Read number of relevant articles, researched and analyzed of the possible reasons that cause the earth’s climate change.",
      "Developed ideas for solving Changing Planet problems based on Extended Reality technology and collected literature.",
      "Developed new components based on existing XOXR project in Unity and implemented simple functionality using C#.",
    ],
  },
  {
    title: "Software Engineer Interview Intern",
    company_name: "Codepath",
    icon: codepath,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Completed a comprehensive interview preparation course at Codepath, a leading provider of technical education for aspiring software engineers.",
      "Learned essential coding concepts, algorithms, data structures, and system design principles, and gained hands-on experience practicing mock interviews with industry professionals. ",
      "Developed strong communication and problem-solving skills and increased confidence in technical interviews.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Realtor.com",
    icon: rdc,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Xun proved me wrong.",
    name: "Sam",
    designation: "Member",
    company: "Family",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx1iH_Rs7lO1dviZTAV9EySETRYcbnL44aA&usqp=CAU",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Xun does.",
    name: "Mom",
    designation: "Member",
    company: "Family",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEX///9RUlSpyv//4tAAAACoyf8LERj/6NUNExmtz///5dOu0P+rzP////2kx/9UVVcAAAzk7vwAAArX5v0ADBUAAAYUGR+91vwIDBBOT1FAQkW00f3Q4fxJSk3t9Pz4+v3D2vwpLDAyNTkcICUaHiM3OT0kJyxVZ4HYwrP128nC2f2CnMM8SVwmLzxDRUeKptBkXFjSva5HVmznzr6ajIOYtuVkeJZ1jLDDr6JaVFGomI4tN0Y/TWCRrtqWtONMSEZxaGKGe3OvnpMqM0F4j7Vcb4lthKRPYHd/dW4iJykeJjFuZWHHsaWheZThAAAXoUlEQVR4nO1dCVfiyBbWUFQWAgRIYgBRWYWWVhFQUXts7G51tP//73m3wprKrSxsOu/4nTlzbGmafNz91q2qvb0vfOELX/jCF77whS984Qv/f0in0x/9CJtHeu8oVzg8+XZQVvUJ1PLBt5PDQu5o779ON32cK5yUpYyLJECagP04+aVUPinkjv+bPI+PCt9Ul5gUBJeq+q1wdPzRDxwDIJGjwoEeSs5LUz8oHO39J7Q2vZc7KSczUckt0cwkyye5z86R0VNXoTcnqX5mkuAzD1PSyvRmJKXU4ef0sel07mB16XEkD3KfLmym9wp6ZMcSgWRSL3wqOaaPD6XMxuhNkJEOP0+c3AK/GcePpsawDfktc/x4ORbUzZmfH0m18LH00rlyqPtkmbaa4qCqLAuPQjFTzn2gGI8PAvkBNSAzvDj7fX161b2///Wd4f6+e3V6fXN28UNiVEN5JjMHH2WO6UJAfAByZf3i+eXedgjAcjywJr+zu6c3Z8NyGM1ksvAhYjwuixwMyE7Xz/68AQvHoQplUAC2C/YTnf7OZU+vni/ct4g5Zsq7F2O6IAkEqKvS8LnLnhyYKHajVWuWzivF4n52iv1isXJeKtWq9YYNXBXKeHavL+CdQpJJaddiBAsU0FOHz/cgO3h0u1UrVYouJwzsheJ5qdZqKBNpOlc3QzHJHVtjTkcJwvOdXTnEAcG0audFATWe6H4FaCoTWXZvhqqAZEbP7Yxf+hB1oaCeN/dMekqrWdmPwm5Bc794XqvDF+MQ++osmUI5JjOHO9LU4wPUAlX9+Y2Jr9EsxqM3Z1lptsD/OOTteijguBtNPVIxDdVTZ29Mfq3zlejNRVmzQV3BJH+UMY4Z9Wjr/NI5zIfqqWGXya9aWZ3elGS2UnW19eEHJsektO0MB6I8JkD92pXf2vwmJItNe8IR8zlbjv7gYxCCKghQoY3zjfBzOe43G4zjKWaPW/U3KEGwQMdRlOam6M041qlClGck09kixfQJRlB/BgHWN6OgXo6gq+QeMcfMyZYoCgieAsHqhulNOBZroKrOtV+MW6KYPsGcqH5FFLO5aQHOOFaYqt7/k+I/NrkNigIJAkG6ORfjR5N5nDNfcNyCFHEnwwgq2yQ4FeOpL25s3N0IwsTptgkygDWS7lDdLsV0ASOYet4Fwf1sSVHIdz/FjYb+HJbJqBdgg6WtE2SaalPn7QdPMbnBauoI4SfpQ6jQt+VFORTr1KEXPEVpY2n4cQqNE12HVndDENCCquqCixrJ1IYIptGOBTNCe1f8AFXwNz84ipmDjZhi+hAtJ4aKYlZ2yHBCkVPU5EYcag5tyahXFq3tTEfnFHmPmtmAtznWUT96RpTGTvm5FJ3vQ2/oT+pr9zVwI9Sle4eWds1wv06tLpeHr2+KaKh3RdjaOcH9oq2QF57imotTaCSESAEiPN89w/0KZDc3fFhcKyqmy2jjUP8YEbIEzu9Qk+V19BTXUSnV/RgRAsUa5G8b1NNjlJ+k/0OU+ocQBLQU8sBXxCv70/Q3fHkpdWrtJONGwbzNby/F5LdV9RSP9RAqIF8rfhBB1xQdLiquHPdxNyOpv8mu0xkPxSq1HnhnsxpBgZtx/cxOM1Ieti9krOZs8HSN+RlHqX+cCAHnJn2TPHq6WvKGdmaYkj6TXRW+AmSrCvnjdTaZwxVEiPMDGUI+82F+ZoIii/tc9y22EPHmGiP4A/KZDxUhCLFJHS4Fj996E4ow9Yd8QFXBo66QMy4/jStEoQiTvxz60fz290vUuV9TiEIrvCDK7vpPYrT8QozFD1/q/TxKChGDOr/4mBhHiGnR3I6e/O4oH83OhV+IegyGabTH/ZmU1BXifdnzbMkYQwxpfGJGYmsx1gdVhjyydT4mJmO0bPDehaukjfCyIru/k4SgRK0XrlCM3M8QRnu3fRGipNlis74bX2TzVVSMgIGtU0yU9CWkfZGdDDXtwlSzNUqePb4m+jpGTqikUPs2AlWQzU9Q2tpJcVUBX8OFxIiVMLpiPxHhb6IE1L7Z8wabmq3tqHgEX+N4fU3k1X3h/oLgHhuoDfCrFncWTJqUXHt8TVKNJkJxMJSCemyMoEGVxsZnh8QANeUq4WghUaykQbUvVDTUGNSMna0LTyrhldRU0IACJYWMTWhjrOH+JHdG25qQwtD0edNILakjoZIG1r4tSgZyQtMGhG5hyg1HkToP3GpblKAvarEFlhXZEjWrWgIg39rGpicVhahThQv6UZpuopxUl96ouKyALLHnMkzI/UeysWnaYLCgf8blphEYigonNShjAxGO5MQEWmJATEWprTHwHRXnlG+66eEEj4RK+hAQDFtzEbpibNfAGu3tr20UFafLNfjDDVFkhqwR3BA9cpGaj4klgMMxIG40StuWY506ybiGKFhvklLX4mAIsdC6k5cpgjVeEsYR3Xwx3f+0PrI1X5H4LYxgWlBX6NJ3cSOYhd6+5mGY0OTeKG+wNLxZWdrVtV+sVErNGqBZqqy29WQZJX99ERbzj0W9/MDKsEGrnQQP4PhuWibb41VvVRmparVVtycb8yb/r1dL66WxFWqdcg2psL6pYM1Q0oP8zL5ijjQfQ8axP3gkxDCpQmfbDk0jT6bIm/Bnu7qOsRZtn6sJq6AEjkYfBiXdRWr8lBGGjGOi/zQetWakjOrodXB322u327dP40ub5CnbKbU6R3A1ejxXg42rMyUN8DNBDF2SspbodPrtXrvfcf8oay7Y79uDFsROaq+arWerlHizmuRJCEPBeIkETyEu7gMZzgMIAKPfGzGnu2Iqi2Q1Yck3boWsuA/qvVDzMoyhmLrcvmT+qLoKQ+ZM+RGiYIJp4QCNuG4C2GbJ70tjcOw9shxolZHxcz5cSJngcIHnbGyAJnAGqkVNPh7G46jd2ax2js+wopBTbjk4OG/DgwUboAnyBcwaeuswnORAkB3E7iWzcMExDA4XaLDQJSuk012i+fHKhjgT4wDiY/wuT4PWOYbB4QLfOBI6QFNUzOZ6BJkYe3Uj/v4NKEy9CzQhQwtoFyp1H+xnJmGpvZ6aMjF2zq24OziyULdxMjwJZIgV+Kw/EzZAU6LGumrKKMrvJGavjjHU45T5GMMoy75FWzHWiBdzyK8x9+GwsmYYhyGS0ujSW/iyL/OmT+sLESiO41Fk9vFPnKQGaegH100zVBSztgmGcSkiNXBwax9pQ6WuogwEZ72dmnUpRl7c8TMMbkYhEwr60KZ2hK8UfM3quakH2muM+VVmHhccw6C0DWEYeZrUpsZamdsSxct85CnrTTC8ijZNyrpRA58QWTUoI7zd32MvuC8mambUZeT1GepDhUbb/lOEAohjoXV6T4PB4Knjo3L3evk+vvvb0VDF1vpQ+kcLi+szBE8aceQZIpP1d0FFkzusR0OsvEWaXKiEqGcYBrxARk8djKN8S5SQNGrO0O9pAssnP8PoAzTga17njyt3xgYxTcPtzrR4hgNi2Uqe5E2TVJ+Q0p/9jZCJgcX3ysXDkMY+Hw/Zckxkv0YX6bd8+69FLWM0fuq1ewN/ytpr9/v92/GIGCa59Csx4NGIpDtIoyY4HvI5DdS+kUdHsos6mFVChjLoa27XCfEo015Uov2TmPka4oO1vkKjKA+StQXnNHxeqt5EH+pmRj+RFugYJe8dka9cJsJKJqOKSFF+irQLd+3MW32xIucXEC8mDLU2ELyLwM/l2Dk38u+Iu9EujQjqw8bbuB00wQz5+lBv0EgG735YjeYnDB9Nchc5v9E6VZP8xfTUphG+3QZVuAr4JJAhV+OzVjfyPVZQ7wN2qLgW1SHGY4zsBkID8ecK8Pu7CBvIirbzK9bGBK5Po+PRsEmx7mYWyotJWBgpt3Hyt857Cc335Ecz1AlUbOchVp+G67WxCRqk+C2y2S7+o7OlRed79sCaMDNLyO5/05+xkAjv7oU7m4pi8d3E4F4b1y9lbUTMFM4pQrGh8Oak9V7HbcGSzaDUHAeLFpi/Q1AMXn5DOsLB/VKu5526d9B4z7bI8Y6uRY2Rl432RPJ5zIm48QTymdcQXdb6JGzVpkTJ71g9b27domwLdt2zE1Voa/H1Zot1xVc9ddgRpea/mBA1ky0o5sNaO/KrwT5HTBBJvMN2JXiTmpSoy+YKkQ0GsVez2f0mUOEXupkEAAR79I7hvhRWUE7/CXHeiCRtYWtPnvVDNoyIz3kVbYX+mweS1Wap1KxSSq1anxdWx2YyrKLFwyivKMYj8gr3934aimkG1Bn+lOYkhKEnXEA4xNMKSF+M18SrOTsw18ybY3/mBXZokTzevemUoKgKbyJDemS+jwyhFCEc3sfc2e0JF6wXjCdONkuymZUYxLKI1cRdptYeD3ySnb6U6PUSEfLWPjHG8qMhWvqqUOuFczRh6/jHPEO0hJmEPkg68oOnwd1tW5RkB8TDBB4D+b/Ug4+QOy1TUEohwSJsFsMzT6Nf4AU+K1lA+bRb9vGyIF5vBPARFuTwbUHJjyxyh87TeGaihAwVkzUmmAqFrt+vB1AT8qS5JX8VY+h3paEzUR5XI9LSCjUm9Q4x46TYqzAc5N1Gc6eF1xkN+hZ7rm05bxP50tJ0kUIrmXwLZtMMXw03aLJ6GHmSInWuYuVsDMe6hyH277JS140Bs8+PgZgi10ZG3f0OO1VsfBe+6mtui14oQU+Zr+toxAf7NtxQJt9ZJFadlEi0Y8q8NU0L5HHeX+X4c7ZIM8LLhlhG2+tzhsyXx1oYBY8Rb4UKiumJxcNHIQaz2pz38qx+6hdWWwBDa5KpwANcxpCh1qmbJI7MF1+h1m9R3wBvkfJze5Fm9ZeT79QVuoLfnC+H1kxk7FIIyDLzr7Fk/kRmn6RBwc8zLPm2BUU7AmSpG8UG9pCmZWVWzcMjx3A1rMlooO1f4TvG+dkEhHxpmj5dUjgzjLZnZnnfE1taQwrQLFT4nckzWywgRxYIJX9jmSFkpPXpNwj1vskZTNamb1y8j7gVeNHaFwRElrXdugGxRyLPYMg9t4sah2BCJvMJeUSGFYiGq+xdW95/qOsO2tA7n87ma31uSF8MrWNSEnMiBfLReVoIdqh4v2sWlr0djMj7D5f2kOpdR8FKs9ZMHI9maCtiKoORkX+PGe+Zo5lJvfMv70uzDT5WRN1DurwPmLkabJamQiEksobg2Ig2oMBK2VosL5Nwc6ZZAY3EQ1BS79Be9H3AS3u5RTUwhESzDsUtq26wfrX/Ycd5K/bAjVyd571AlvuqmZJ6h2dj7OVe7MfXJVvQWW9RU2nLYIh8D1HwsCPDjj3I0AFHM42GfUq55nC24TvzK/r5gktnKggHFYp1Sq0B67xHylLA2btqHVT185hU2JO3//QtmJ77lDTGmQpLITFg2KRFFcsaj9CFI//TPoEdQvBuP40jixI0c5oduouJXo/HIpb36I8452IsTSwEzGJkmwr4G1OJFhHlmmESd1n/Mao5ghnak8Ti1j8JVrQVbqdFnLNNls+nCZinyVZqNtvg04ryyFrnkRimARyjZqZa33RtXNPuiG+ZhPkZ79bDuCeYz98YeMpAtnjerCvRhmc17el9dPn61I7Gb9KjuZM1NgEOBPmPbvDr9/HOGFpaKtWTQZtjRbNQOMegQSiE4YgtFPReKTLFny3xGVvsc6IWZ32xAdqgbQIVxSxto+HGVrnr4ybbqYnsxPCdThP7rK9F1GdBX7h5dN+dFVhvs4UAzH8q4MgosjGcifBh1WiPCLEbeO4zs/mYJYMX2LxNwlVStijSQjfv2WuLcG/ZEi+CJ9mLdC011W4fsYAKnpTaTfwGMNaBeuFEGJ/g0tmXqeDDu7P1aWNqNXTqBCvAWENAtPpboYq3qljx4PJ5041NegeNfZRovO6LV1Z/iYG++9EU7TtmU0LPXCxcheBSS8oVYoCeQtBfufXNWj1I/cXmqgQrauw8aO+RgqueQbtYS3TdqXg0iqWI4spIDhSv1rdMfvzUfZevWpp/2jnkw9yhLaueI7w4CzoVfBNCJaCXIQ9+BhW+8thCB6I6pmjqs2LzOrr6WdCLiMEWMIJmzFrC3XmgbQTd5z1jQihWN0LGJvpKIV274s5pW+N+hIWzeQ50NmwrgohGwwzItcEKLaw00epUMJ1QV5xfavxOvgjzc/XdW2UC9FScfrujmGMBfdZhrOPDpYLJyxZ1+B7pWufqL/oZ+j+QYAj9KZtpw2ZE3ae9tSh5RZfV3MFLzEfJIEJsQLgIBOtcSbHujUELPb0JNMWGePxHfspTdJhbS4wMtMvDRIjN8RQbilP/sYmjvJewuKOEXUEmHE5iAzYiIYIUTTNf882jaIn3vNnAHG2ngc14Z8GL+i622sB1QfPkDUzRomJvEyBEMLcGlPeDhIej3Bnl8Z2n8jiPtDDdy8l+cVfpbOCemeW4zzYiiqboQIimuK3Izo6iVu12Uf9q8t+WYeZ7mB9tGxRptLsXzEmcDW7irqCl+570oeXQukhRG0Hb8zRIpA2T1Ad9eYK/I2IaLXz4tOQfDZ5eEsjf2LmZ+56WTXGoOKL0jZ1nFrSfW+6PLBAaMUfjwXjE9tMItpKwjbK+Ys296PG3d2R9Y3d2Ld+7pg5BUQWnO7CdD0ENG03uXSpuuy2fh/+T5i1a+bqlPdcarbTQyzo3du/acpdfHd4T0ekOFUrNwDpRk/tP7yU7T/JK6WcvgX4b8m3ee35mdr9SZQL8w5ugtMG785bvP9SlK9F5c8zZPAYvL2lQaPT77X4/IWi5yT2DDQ/bVXaIFDtUil25Dj70/sJ/v/Mm7z9cvsPSvaGa2qgY64oVXgrjB9VMCYIbJd8JYQ0au1Gv28rkRvkbyXf34YbvsPQsuKkXb+yOYySFY+dfrtOUktsmJS/Sjz82IeC2FXaVPCHdGx25oHurV62q0im7aLxR4s9ccy+cijeL4CHYpyZ50HUg9OPm9L7h0LeH6zNJxS4g38LV1cunC+upH13GUalVvL0wMEUoMlakCDZokum1FbqaSqXK5VRKRS7mlrZ0q7PnTmc9ddElFlhLvXbOzpubU6wqk+XvFQjegg3yV+MJsJU7nfkzosEcX2zwOeAKWu75eVPUFdMWzHYHwT3alVwhIWFXEvRTBDkObx7AJ7gugSq23bBtm22PMAXZWBDBzjsQPI0mwa0R9B9Hr6vq8OxPV2HrnpYzAfzomHUsow6A3KvmHfKMuRSE4OadjJgiC4+QDQ/Pnq9Pr7r33e7Dy+n17y4knbcxKLKzQE3LRoL6zgnil5cw9666Ts/9CZz7A2HHJkderm8/WtjN2ziSmw30CMWcJDoreonyKVHICD1LwM8vMSYmaChfGAn4SXHGEVbEkSo6h3dBMfVMHMPEiwevgsq3DQurG3Bk1A0m22IcC28wWSAFmR0lP/vBHDW5PYLa336O5kOl5MEGehZRAP4mlKM6vAIx0nEAR+D3kyno1TCihm7Zx3iQ08M1VT0DMVrm5W0H2zakyYm/l3nDIfdn0VyolNE3WS2F4hi9CNkLNXmtgBxJ9edt3z09YkaOVYm9cZMAvzesLsIJ7kpDZ0gXIvhUNfn8HbJXg9iP49s2lL0Mnf7fu8tqPg/6+Qv4RbRAadtBAsFxOVyMUAddnLpZTp6dJmzX/20opmFZEOAJubrA6j4UmfKOBTgBRP9wpwqRI3Vx/ctN5qYAcsR+OdOj+RdAcutRXgiwxggcWbEnXdycPtz/+v79+3336vrsn1QqYoBgLnTXFriMdK4ciSOkOayknQIt2oX8yjvIYgJREN67swkk1XWXltZH+vhQCnc5qyEjHR5/sAAn2BJHxu+jqc2wDTl+GvlNkd4r6FFiR0Qkk3ph7zPxY0incwdSNMcaRi8jHeTSn40fQ3rv6DC1Lkmglzo8+nTymyO9lztRkyuThHeqJ7nPS28CRrK8Ckl4T/nz03MBz3hUONAzmciuJ5nMZPSDAijnf4HfDMdHhW9qJpQmI5dRvxWOPk3oi4X0ca5wUpYyLpLJOVn24+SXUvmkkPtUcW8VgI/NFQ5Pvh2UVX0CtXzw7eSwkPvEPnN1pP9TpvaFL3zhC1/4whe+8IUvfCEq/gd2Ccgvh/NsUQAAAABJRU5ErkJggg==",
  },
  {
    testimonial:
      "After Xun optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dad",
    designation: "Member",
    company: "Family",
    image:
      "data:image/jpeg;base64,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",
  },
];

const projects = [
  {
    name: "The Bullet Journal",
    description:
      "The Bullet Journal is a CRUD application that will encourage its users to adopt the AGILE principles with " +
      "which it has been developed. The Bullet Journal is a personalized aid to keep track of commitments, classes, " +
      "events, and remember important information.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: bullet_journal,
    source_code_link:
      "https://github.com/cse110-sp21-group27/cse110-sp21-group27",
  },
  {
    name: "Undefined Movies Review",
    description:
      "Web application that enables users register/login account to search the movie they like, also log in as" +
      "a reviewer can drop the score and comment for the movie.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://www.undefinedmoviesreview.com/",
  },
  {
    name: "Yin-Yang",
    description:
      "Have you ever thought about having a get-away weekend to take a break from your daily life but cannot afford " +
      "the money or time to do so? Are you looking for a guide to help you meditate and rest better? Or do you " +
      "need motivation to move your body a bit with chill beats? \n" +
      "We get the inspiration from our own experience during covid time. We realize that the sense of boredom " +
      "and tiredness may result from too much mental load, too little physical movement, or both. Therefore, " +
      "we want to build a product that practices the concept of “Yin-yang” where it combines the mental soothing " +
      "practice with a physical light movement game.\n",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "XR",
        color: "green-text-gradient",
      },
      {
        name: "Quest",
        color: "pink-text-gradient",
      },
    ],
    image: yinyang,
    source_code_link: "https://github.com/5097-Group/Yin-Yang",
  },
];

export { services, technologies, experiences, testimonials, projects };
