"use client";
import React, { useState } from "react";

import { NavLink, Link } from "/src/nextNavigation";
import { FaAndroid, FaApple, FaReact } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAmazondynamodb,
  SiAmazonaws,
  SiAngular,
  SiAnsible,
  SiApache,
  SiApple,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiIonic,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJquery,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiRubyonrails,
  SiSvelte,
  SiSwift,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const categories = [
  { name: "Mobile", id: "mobile" },
  { name: "Frontend", id: "frontend" },
  { name: "Database", id: "database" },
  { name: "Backend", id: "backend" },
  { name: "Infra & DevOps", id: "devops" },
];

const iconComponents = {
  "apple-icon": FaApple,
  "android-icon": FaAndroid,
  "react-icon": FaReact,
  "flutter-icon": SiFlutter,
  "ionic-icon": SiIonic,
  "swift-icon": SiSwift,
  "kotlin-icon": SiKotlin,
  "java-icon": SiJavascript,
  "php-icon": SiPhp,
  "objectivec-icon": SiApple,
  "vue-icon": SiVuedotjs,
  "angular-icon": SiAngular,
  "Ionic-icon": SiIonic,
  "jquery-icon": SiJquery,
  "typescript-icon": SiTypescript,
  "mysql-icon": SiMysql,
  "postgresql-icon": SiPostgresql,
  "apache-icon": SiApache,
  "oracle-icon": SiOracle,
  "django-icon": SiDjango,
  "mongodb-icon": SiMongodb,
  "dynamo-icon": SiAmazondynamodb,
  "node-icon": SiNodedotjs,
  "rubyonrails-icon": SiRubyonrails,
  "laravel-icon": SiLaravel,
  "express-icon": SiExpress,
  "aspdotnet-icon": DiDotnet,
  "firebase-icon": SiFirebase,
  "docker-icon": SiDocker,
  "git-icon": SiGit,
  "kubernetes-icon": SiKubernetes,
  "jira-icon": SiJira,
  "ansible-icon": SiAnsible,
  "aws-icon": SiAmazonaws,
  "azure-icon": SiMicrosoftazure,
  "next-icon": RiNextjsFill,
  "sqlserver-icon": SiMicrosoftsqlserver,
  "redis-icon": SiRedis,
  "jenkin-icon": SiJenkins,
  "terraform-icon": SiTerraform,
  "svelte-icon": SiSvelte,
};

const technologies = {
  mobile: [
    { name: "iOS", icon: "apple-icon", link: "services-ios" },
    { name: "Android", icon: "android-icon", link: "services-android" },
    { name: "React Native", icon: "react-icon", link: "services-reactnative" },
    { name: "Flutter", icon: "flutter-icon", link: "services-flutter" },
    { name: "Ionic", icon: "ionic-icon", link: "services-ionic" },
    { name: "Swift", icon: "swift-icon", link: "services-swift" },
    { name: "Kotlin", icon: "kotlin-icon", link: "services-kotlin" },
    {
      name: "ObjectiveC",
      icon: "objectivec-icon",
      link: "services-objectivec",
    },
  ],
  frontend: [
    { name: "Vue", icon: "vue-icon", link: "services-vue" },
    { name: "React", icon: "react-icon", link: "services-react" },
    { name: "Angular", icon: "angular-icon", link: "services-angular" },
    { name: "Next Js", icon: "next-icon", link: "" },
    { name: "ASP.NET", icon: "aspdotnet-icon", link: "services-aspdotnet" },
    // { name: "React Native", icon: "react-icon", link: "services-reactnative" },
    // { name: "Ionic", icon: "ionic-icon", link: "services-ionic" },
    { name: "JQuery", icon: "jquery-icon", link: "services-jquery" },
    { name: "Svelte", icon: "svelte-icon", link: "services-typescript" },
    // { name: "PHP", icon: "php-icon", link: "services-php" },
  ],
  database: [
    { name: "MySQL", icon: "mysql-icon", link: "services-mysql" },
    {
      name: "PostgreSQL",
      icon: "postgresql-icon",
      link: "services-postgresql",
    },
    { name: "MongoDB", icon: "mongodb-icon", link: "services-mongodb" },
    {
      name: "MicroSoft SQL Server",
      icon: "sqlserver-icon",
      link: "services-django",
    },
    { name: "Redis", icon: "redis-icon", link: "services-apache" },
    { name: "Oracle", icon: "oracle-icon", link: "services-oracle" },
    { name: "DynamoDB", icon: "dynamo-icon", link: "services-dynamo" },
  ],
  backend: [
    { name: "PHP", icon: "php-icon", link: "services-php" },
    {
      name: "Ruby On Rails",
      icon: "rubyonrails-icon",
      link: "services-rubyonrails",
    },
    { name: "ASP.NET", icon: "aspdotnet-icon", link: "services-aspdotnet" },
    { name: "Express", icon: "express-icon", link: "services-express" },
    { name: "Laravel", icon: "laravel-icon", link: "services-laravel" },
    // { name: "Docker", icon: "docker-icon", link: "services-docker" },
    { name: "Firebase", icon: "firebase-icon", link: "services-firebase" },
    { name: "NodeJs", icon: "node-icon", link: "services-nodejs" },
    { name: "Django", icon: "django-icon", link: "services-django" },
  ],
  devops: [
    { name: "Git", icon: "git-icon", link: "services-git" },
    { name: "Docker", icon: "docker-icon", link: "services-docker" },
    {
      name: "Kubernetes",
      icon: "kubernetes-icon",
      link: "services-kubernetes",
    },
    { name: "Jira", icon: "jira-icon", link: "services-jira" },
    // { name: "AWS", icon: "aws-icon", link: "services-aws" },
    { name: "Jenkins", icon: "jenkin-icon", link: "services-azure" },
    { name: "Ansible", icon: "ansible-icon", link: "services-ansible" },
    { name: "Terraform", icon: "terraform-icon", link: "services-ansible" },
  ],
};

const Technology = ({ name, icon, link }) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="flex-shrink-0 sm:w-1/2 md:w-1/3 lg:w-1/4 sm:p-4">
      <div className="group bg-white border border-gray-200 rounded-lg sm:border-0 sm:bg-transparent sm:rounded-none overflow-hidden flex flex-col gap-2 items-center justify-center p-3 min-h-[100px] sm:min-h-0">
        <IconComponent
          size={48}
          className="text-blackk group-hover:text-bloo transition duration-300"
        />
        <span className="group-hover:text-bloo transition duration-300 text-blackk font-semibold text-xs sm:text-sm text-center">
          {name}
        </span>
      </div>
    </div>
  );
};

function Techs() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="">
      <div className="bg-bgplate bg-cover "></div>
      <div className="bg-zinc-50">
        <div className="mx-auto font-manrope px-4 py-6 sm:px-0 sm:py-0">

          {/* Mobile: left-aligned short title | Desktop: centered full title */}
          <header className="mb-6 sm:text-center sm:mb-10">
            <h2 className="text-bloo fontsize_2 fontweight_1 py-2">
              Technologies we work with
            </h2>
            <h2 className="text-blackk fontweight_1 text-2xl sm:text-3xl sm:mx-auto md:text-3xl lg:text-[32px] sm:max-w-4xl py-1">
              <span className="sm:hidden">Explore our cutting-edge tools</span>
              <span className="hidden sm:inline">Explore our extensive range of cutting-edge tools and platforms</span>
            </h2>
          </header>

          {/* Mobile: compact left-aligned | Desktop: centered wide gaps */}
          <nav className="mb-8 sm:mb-12 sm:max-w-4xl sm:px-2 sm:mx-auto">
            <ul className="flex flex-wrap items-center gap-2 sm:justify-center sm:gap-x-[4.7rem] sm:gap-y-8">
              {categories.map((category) => (
                <li key={category.id} className="text-nowrap">
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      activeCategory === category.id
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile: 3-col card grid | Desktop: flex-wrap original */}
          <main className="sm:mx-auto sm:px-4 sm:pt-4 lg:max-w-7xl">
            {categories.map((category) => (
              <section
                key={category.id}
                className={activeCategory === category.id ? "block" : "hidden"}
              >
                <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
                  {technologies[category.id].map((tech, index) => (
                    <Technology
                      key={index}
                      name={tech.name}
                      icon={tech.icon}
                      link={tech.link}
                    />
                  ))}
                </div>
              </section>
            ))}
          </main>

        </div>
      </div>
      <div className="bg-bgplate bg-cover py-4 rotate-180"></div>
    </div>
  );
}

export default Techs;
