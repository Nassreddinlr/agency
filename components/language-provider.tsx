'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Full-Stack Web Development & Automation Experts',
    'hero.subtitle': 'We build complete digital solutions - from stunning frontends to powerful backends, plus intelligent bots that automate your business operations.',
    'hero.cta': 'Contact us',
    'hero.transform': 'Transform your business with our comprehensive web development services',
    
    // About Page
    'about.title': 'About Web01',
    'about.subtitle': 'We are a passionate team of developers and designers dedicated to creating exceptional digital experiences that drive business growth.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Founded with a vision to bridge the gap between innovative technology and business success, Web01 has been at the forefront of digital transformation for over 5 years.',
    'about.story.p2': 'We started as a small team of passionate developers in Blida, Algeria, and have grown into a comprehensive digital agency serving clients worldwide. Our expertise spans from modern web development to intelligent automation solutions.',
    'about.story.p3': 'Today, we continue to push boundaries, embracing new technologies and methodologies to deliver exceptional results for our clients.',
    'about.values.title': 'What Drives Us',
    'about.values.subtitle': 'Our core values and principles that guide every project we undertake',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'To empower businesses with cutting-edge digital solutions that drive growth and innovation.',
    'about.vision': 'Our Vision',
    'about.vision.desc': 'To be the leading web development agency that transforms ideas into powerful digital experiences.',
    'about.values': 'Our Values',
    'about.values.desc': 'Quality, innovation, transparency, and customer satisfaction are at the core of everything we do.',
    'about.team': 'Our Team',
    'about.team.desc': 'A passionate team of developers, designers, and strategists dedicated to your success.',
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'The talented individuals behind Web01\'s success',
    'about.cta.title': 'Ready to Work Together?',
    'about.cta.subtitle': 'Let\'s discuss your project and create something amazing together',
    'about.cta.button': 'Get Started Today',
    
    // Services Page
    'services.page.title': 'Our Services',
    'services.page.subtitle': 'Comprehensive digital solutions tailored to your business needs',
    'services.packages.title': 'Service Packages',
    'services.packages.subtitle': 'Choose the perfect package for your business needs',
    'services.package.starter': 'Starter Package',
    'services.package.starter.desc': 'Perfect for small businesses and startups',
    'services.package.professional': 'Professional Package',
    'services.package.professional.desc': 'Ideal for growing businesses',
    'services.package.enterprise': 'Enterprise Package',
    'services.package.enterprise.desc': 'Complete solution for large organizations',
    'services.package.popular': 'Most Popular',
    'services.package.choose': 'Choose Package',
    'services.process.title': 'How We Work',
    'services.process.subtitle': 'Our proven process ensures successful project delivery',
    'services.process.consultation': 'Consultation',
    'services.process.consultation.desc': 'We discuss your requirements and goals',
    'services.process.planning': 'Planning',
    'services.process.planning.desc': 'Detailed project roadmap and timeline',
    'services.process.development': 'Development',
    'services.process.development.desc': 'Building your solution with regular updates',
    'services.process.launch': 'Launch',
    'services.process.launch.desc': 'Deployment and ongoing support',
    'services.cta.title': 'Ready to Get Started?',
    'services.cta.subtitle': 'Let\'s discuss your project and provide you with a custom quote',
    'services.cta.button': 'Request Quote',
    'services.get.quote': 'Get Quote',
    
    // Contact Page
    'contact.page.title': 'Get in Touch',
    'contact.page.subtitle': 'Ready to transform your business with our digital solutions? Let\'s discuss your project and create something amazing together.',
    'contact.get.in.touch': 'Get in Touch',
    'contact.get.in.touch.desc': 'We\'re here to help you bring your digital vision to life. Contact us through any of the following methods:',
    'contact.office.location': 'Office Location',
    'contact.phone.numbers': 'Phone Numbers',
    'contact.email.address': 'Email Address',
    'contact.quick.response': 'Quick Response',
    'contact.quick.response.desc': 'We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly.',
    'contact.send.message': 'Send us a Message',
    'contact.select.service': 'Select Service',
    'contact.budget.range': 'Budget Range (Optional)',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Common questions about our services and process',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.experience': 'Years Experience',
    'stats.satisfaction': 'Client Satisfaction',
    'stats.support': 'Support Available',
    
    // Services
    'services.title': 'Complete Digital Solutions',
    'services.subtitle': 'From concept to deployment, we handle every aspect of your digital presence',
    'services.frontend': 'Frontend Development',
    'services.frontend.desc': 'Modern, responsive user interfaces built with React, Next.js, Vue.js, and cutting-edge technologies',
    'services.backend': 'Backend Development',
    'services.backend.desc': 'Scalable server-side solutions with Node.js, Python, databases, and cloud infrastructure',
    'services.fullstack': 'Full-Stack Web Applications',
    'services.fullstack.desc': 'Complete web applications with authentication, payments, real-time features, and admin dashboards',
    'services.ecommerce': 'E-commerce Platforms',
    'services.ecommerce.desc': 'Custom online stores with inventory management, payment processing, and order tracking systems',
    'services.wordpress': 'WordPress Solutions',
    'services.wordpress.desc': 'Custom themes, plugins, WooCommerce stores, and performance optimization',
    'services.mobile': 'Mobile Applications',
    'services.mobile.desc': 'Cross-platform mobile apps using React Native and Flutter for iOS and Android',
    'services.whatsapp': 'WhatsApp Business Bots',
    'services.whatsapp.desc': 'Automated customer service, order processing, and marketing campaigns via WhatsApp API',
    'services.telegram': 'Telegram Bots',
    'services.telegram.desc': 'Custom Telegram bots for customer support, notifications, and business automation',
    'services.facebook': 'Facebook Messenger Bots',
    'services.facebook.desc': 'Intelligent chatbots for Facebook pages to handle inquiries and generate leads',
    'services.api': 'API Development & Integration',
    'services.api.desc': 'RESTful APIs, third-party integrations, and microservices architecture',
    'services.database': 'Database Design & Management',
    'services.database.desc': 'Optimized database structures with MySQL, PostgreSQL, MongoDB, and Redis',
    'services.cloud': 'Cloud Deployment & DevOps',
    'services.cloud.desc': 'AWS, Google Cloud, and Azure deployment with CI/CD pipelines and monitoring',
    'services.viewAll': 'View All Services',
    
    // Technologies
    'tech.title': 'Technologies We Master',
    'tech.subtitle': 'We use the latest and most reliable technologies to build your solutions',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.mobile': 'Mobile & Bots',
    
    // Process
    'process.title': 'Our Development Process',
    'process.subtitle': 'A proven methodology that ensures your project\'s success',
    'process.discovery': 'Discovery & Planning',
    'process.discovery.desc': 'We analyze your requirements, target audience, and business goals to create a detailed project roadmap',
    'process.design': 'Design & Prototyping',
    'process.design.desc': 'User-centered design with wireframes, mockups, and interactive prototypes for your approval',
    'process.development': 'Development & Testing',
    'process.development.desc': 'Agile development with regular updates, code reviews, and comprehensive testing',
    'process.deployment': 'Deployment & Launch',
    'process.deployment.desc': 'Smooth deployment to production with monitoring, optimization, and post-launch support',
    'process.maintenance': 'Maintenance & Support',
    'process.maintenance.desc': 'Ongoing support, updates, security patches, and feature enhancements',
    
    // Why Choose
    'why.title': 'Why Choose Web01?',
    'why.subtitle': 'We deliver results that drive your business forward',
    'why.experienced': 'Experienced Team',
    'why.experienced.desc': '5+ years of experience in full-stack development and automation',
    'why.custom': 'Custom Solutions',
    'why.custom.desc': 'Tailored solutions that fit your specific business needs and goals',
    'why.fast': 'Fast Delivery',
    'why.fast.desc': 'Efficient development process with on-time delivery guaranteed',
    'why.support': 'Ongoing Support',
    'why.support.desc': '24/7 technical support and maintenance after project completion',
    'why.pricing': 'Competitive Pricing',
    'why.pricing.desc': 'High-quality solutions at affordable prices with transparent pricing',
    'why.modern': 'Modern Technologies',
    'why.modern.desc': 'Latest frameworks and tools for scalable, secure, and fast applications',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to Start Your Project?',
    'contact.description': 'Let\'s discuss your requirements and create something amazing together',
    'contact.info': 'Contact Info',
    'contact.hours': 'Working Hours',
    'contact.hours.time': 'Sun - Thu: 9AM - 6PM',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.quote': 'Get Free Quote',
    'contact.call': 'Schedule a Call',
    
    // Footer
    'footer.description': 'Full-stack web development agency specializing in modern websites, web applications, and intelligent automation bots for businesses worldwide.',
    'footer.links': 'Quick Links',
    'footer.rights': '© 2025 Web01. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Experts en Développement Web Full-Stack et Automatisation',
    'hero.subtitle': 'Nous créons des solutions numériques complètes - des interfaces utilisateur époustouflantes aux backends puissants, plus des bots intelligents qui automatisent vos opérations commerciales.',
    'hero.cta': 'Nous contacter',
    'hero.transform': 'Transformez votre entreprise avec nos services complets de développement web',
    
    // About Page
    'about.title': 'À propos de Web01',
    'about.subtitle': 'Nous sommes une équipe passionnée de développeurs et de designers dédiée à créer des expériences numériques exceptionnelles qui stimulent la croissance des entreprises.',
    'about.story.title': 'Notre Histoire',
    'about.story.p1': 'Fondée avec la vision de combler le fossé entre la technologie innovante et le succès commercial, Web01 est à l\'avant-garde de la transformation numérique depuis plus de 5 ans.',
    'about.story.p2': 'Nous avons commencé comme une petite équipe de développeurs passionnés à Blida, en Algérie, et avons grandi pour devenir une agence numérique complète servant des clients dans le monde entier. Notre expertise s\'étend du développement web moderne aux solutions d\'automatisation intelligentes.',
    'about.story.p3': 'Aujourd\'hui, nous continuons à repousser les limites, en adoptant de nouvelles technologies et méthodologies pour offrir des résultats exceptionnels à nos clients.',
    'about.values.title': 'Ce qui nous motive',
    'about.values.subtitle': 'Nos valeurs fondamentales et principes qui guident chaque projet que nous entreprenons',
    'about.mission': 'Notre Mission',
    'about.mission.desc': 'Autonomiser les entreprises avec des solutions numériques de pointe qui stimulent la croissance et l\'innovation.',
    'about.vision': 'Notre Vision',
    'about.vision.desc': 'Être l\'agence de développement web leader qui transforme les idées en expériences numériques puissantes.',
    'about.values': 'Nos Valeurs',
    'about.values.desc': 'La qualité, l\'innovation, la transparence et la satisfaction client sont au cœur de tout ce que nous faisons.',
    'about.team': 'Notre Équipe',
    'about.team.desc': 'Une équipe passionnée de développeurs, designers et stratèges dédiée à votre succès.',
    'about.team.title': 'Rencontrez Notre Équipe',
    'about.team.subtitle': 'Les individus talentueux derrière le succès de Web01',
    'about.cta.title': 'Prêt à Travailler Ensemble?',
    'about.cta.subtitle': 'Discutons de votre projet et créons quelque chose d\'incroyable ensemble',
    'about.cta.button': 'Commencer Aujourd\'hui',
    
    // Services Page
    'services.page.title': 'Nos Services',
    'services.page.subtitle': 'Solutions numériques complètes adaptées aux besoins de votre entreprise',
    'services.packages.title': 'Forfaits de Services',
    'services.packages.subtitle': 'Choisissez le forfait parfait pour les besoins de votre entreprise',
    'services.package.starter': 'Forfait Débutant',
    'services.package.starter.desc': 'Parfait pour les petites entreprises et startups',
    'services.package.professional': 'Forfait Professionnel',
    'services.package.professional.desc': 'Idéal pour les entreprises en croissance',
    'services.package.enterprise': 'Forfait Entreprise',
    'services.package.enterprise.desc': 'Solution complète pour les grandes organisations',
    'services.package.popular': 'Le Plus Populaire',
    'services.package.choose': 'Choisir le Forfait',
    'services.process.title': 'Comment Nous Travaillons',
    'services.process.subtitle': 'Notre processus éprouvé assure la livraison réussie du projet',
    'services.process.consultation': 'Consultation',
    'services.process.consultation.desc': 'Nous discutons de vos exigences et objectifs',
    'services.process.planning': 'Planification',
    'services.process.planning.desc': 'Feuille de route détaillée du projet et calendrier',
    'services.process.development': 'Développement',
    'services.process.development.desc': 'Construction de votre solution avec des mises à jour régulières',
    'services.process.launch': 'Lancement',
    'services.process.launch.desc': 'Déploiement et support continu',
    'services.cta.title': 'Prêt à Commencer?',
    'services.cta.subtitle': 'Discutons de votre projet et fournissons-vous un devis personnalisé',
    'services.cta.button': 'Demander un Devis',
    'services.get.quote': 'Obtenir un Devis',
    
    // Contact Page
    'contact.page.title': 'Entrer en Contact',
    'contact.page.subtitle': 'Prêt à transformer votre entreprise avec nos solutions numériques? Discutons de votre projet et créons quelque chose d\'incroyable ensemble.',
    'contact.get.in.touch': 'Entrer en Contact',
    'contact.get.in.touch.desc': 'Nous sommes là pour vous aider à donner vie à votre vision numérique. Contactez-nous par l\'une des méthodes suivantes:',
    'contact.office.location': 'Emplacement du Bureau',
    'contact.phone.numbers': 'Numéros de Téléphone',
    'contact.email.address': 'Adresse Email',
    'contact.quick.response': 'Réponse Rapide',
    'contact.quick.response.desc': 'Nous répondons généralement à toutes les demandes dans les 2-4 heures pendant les heures de bureau. Pour les questions urgentes, appelez-nous directement.',
    'contact.send.message': 'Envoyez-nous un Message',
    'contact.select.service': 'Sélectionner le Service',
    'contact.budget.range': 'Gamme de Budget (Optionnel)',
    'contact.faq.title': 'Questions Fréquemment Posées',
    'contact.faq.subtitle': 'Questions communes sur nos services et processus',
    
    // Stats
    'stats.projects': 'Projets Terminés',
    'stats.experience': 'Années d\'Expérience',
    'stats.satisfaction': 'Satisfaction Client',
    'stats.support': 'Support Disponible',
    
    // Services
    'services.title': 'Solutions Numériques Complètes',
    'services.subtitle': 'Du concept au déploiement, nous gérons tous les aspects de votre présence numérique',
    'services.frontend': 'Développement Frontend',
    'services.frontend.desc': 'Interfaces utilisateur modernes et responsives construites avec React, Next.js, Vue.js et des technologies de pointe',
    'services.backend': 'Développement Backend',
    'services.backend.desc': 'Solutions côté serveur évolutives avec Node.js, Python, bases de données et infrastructure cloud',
    'services.fullstack': 'Applications Web Full-Stack',
    'services.fullstack.desc': 'Applications web complètes avec authentification, paiements, fonctionnalités en temps réel et tableaux de bord admin',
    'services.ecommerce': 'Plateformes E-commerce',
    'services.ecommerce.desc': 'Boutiques en ligne personnalisées avec gestion d\'inventaire, traitement des paiements et systèmes de suivi des commandes',
    'services.wordpress': 'Solutions WordPress',
    'services.wordpress.desc': 'Thèmes personnalisés, plugins, boutiques WooCommerce et optimisation des performances',
    'services.mobile': 'Applications Mobiles',
    'services.mobile.desc': 'Applications mobiles multiplateformes utilisant React Native et Flutter pour iOS et Android',
    'services.whatsapp': 'Bots WhatsApp Business',
    'services.whatsapp.desc': 'Service client automatisé, traitement des commandes et campagnes marketing via l\'API WhatsApp',
    'services.telegram': 'Bots Telegram',
    'services.telegram.desc': 'Bots Telegram personnalisés pour le support client, les notifications et l\'automatisation commerciale',
    'services.facebook': 'Bots Facebook Messenger',
    'services.facebook.desc': 'Chatbots intelligents pour les pages Facebook pour gérer les demandes et générer des prospects',
    'services.api': 'Développement et Intégration d\'API',
    'services.api.desc': 'APIs RESTful, intégrations tierces et architecture de microservices',
    'services.database': 'Conception et Gestion de Base de Données',
    'services.database.desc': 'Structures de base de données optimisées avec MySQL, PostgreSQL, MongoDB et Redis',
    'services.cloud': 'Déploiement Cloud et DevOps',
    'services.cloud.desc': 'Déploiement AWS, Google Cloud et Azure avec pipelines CI/CD et surveillance',
    'services.viewAll': 'Voir Tous les Services',
    
    // Technologies
    'tech.title': 'Technologies que Nous Maîtrisons',
    'tech.subtitle': 'Nous utilisons les technologies les plus récentes et les plus fiables pour construire vos solutions',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.mobile': 'Mobile et Bots',
    
    // Process
    'process.title': 'Notre Processus de Développement',
    'process.subtitle': 'Une méthodologie éprouvée qui assure le succès de votre projet',
    'process.discovery': 'Découverte et Planification',
    'process.discovery.desc': 'Nous analysons vos exigences, votre public cible et vos objectifs commerciaux pour créer une feuille de route détaillée du projet',
    'process.design': 'Conception et Prototypage',
    'process.design.desc': 'Conception centrée sur l\'utilisateur avec wireframes, maquettes et prototypes interactifs pour votre approbation',
    'process.development': 'Développement et Tests',
    'process.development.desc': 'Développement agile avec mises à jour régulières, révisions de code et tests complets',
    'process.deployment': 'Déploiement et Lancement',
    'process.deployment.desc': 'Déploiement fluide en production avec surveillance, optimisation et support post-lancement',
    'process.maintenance': 'Maintenance et Support',
    'process.maintenance.desc': 'Support continu, mises à jour, correctifs de sécurité et améliorations de fonctionnalités',
    
    // Why Choose
    'why.title': 'Pourquoi Choisir Web01?',
    'why.subtitle': 'Nous livrons des résultats qui font avancer votre entreprise',
    'why.experienced': 'Équipe Expérimentée',
    'why.experienced.desc': '5+ années d\'expérience en développement full-stack et automatisation',
    'why.custom': 'Solutions Personnalisées',
    'why.custom.desc': 'Solutions sur mesure qui correspondent à vos besoins commerciaux spécifiques et objectifs',
    'why.fast': 'Livraison Rapide',
    'why.fast.desc': 'Processus de développement efficace avec livraison dans les délais garantie',
    'why.support': 'Support Continu',
    'why.support.desc': 'Support technique 24/7 et maintenance après achèvement du projet',
    'why.pricing': 'Prix Compétitifs',
    'why.pricing.desc': 'Solutions de haute qualité à des prix abordables avec tarification transparente',
    'why.modern': 'Technologies Modernes',
    'why.modern.desc': 'Derniers frameworks et outils pour des applications évolutives, sécurisées et rapides',
    
    // Contact
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Prêt à Commencer Votre Projet?',
    'contact.description': 'Discutons de vos exigences et créons quelque chose d\'incroyable ensemble',
    'contact.info': 'Informations de Contact',
    'contact.hours': 'Heures de Travail',
    'contact.hours.time': 'Dim - Jeu: 9h - 18h',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.quote': 'Obtenir un Devis Gratuit',
    'contact.call': 'Planifier un Appel',
    
    // Footer
    'footer.description': 'Agence de développement web full-stack spécialisée dans les sites web modernes, les applications web et les bots d\'automatisation intelligents pour les entreprises du monde entier.',
    'footer.links': 'Liens Rapides',
    'footer.rights': '© 2025 Web01. Tous droits réservés.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'حولنا',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'خبراء تطوير الويب الشامل والأتمتة',
    'hero.subtitle': 'نحن نبني حلول رقمية كاملة - من واجهات أمامية مذهلة إلى خلفيات قوية، بالإضافة إلى روبوتات ذكية تؤتمت عمليات عملك.',
    'hero.cta': 'اتصل بنا',
    'hero.transform': 'حول عملك مع خدمات تطوير الويب الشاملة لدينا',
    
    // About Page
    'about.title': 'حول Web01',
    'about.subtitle': 'نحن فريق شغوف من المطورين والمصممين مكرس لإنشاء تجارب رقمية استثنائية تدفع نمو الأعمال.',
    'about.story.title': 'قصتنا',
    'about.story.p1': 'تأسست برؤية لسد الفجوة بين التكنولوجيا المبتكرة ونجاح الأعمال، كانت Web01 في المقدمة من التحول الرقمي لأكثر من 5 سنوات.',
    'about.story.p2': 'بدأنا كفريق صغير من المطورين الشغوفين في البليدة، الجزائر، ونمونا لنصبح وكالة رقمية شاملة تخدم العملاء في جميع أنحاء العالم. خبرتنا تمتد من تطوير الويب الحديث إلى حلول الأتمتة الذكية.',
    'about.story.p3': 'اليوم، نواصل دفع الحدود، واحتضان التقنيات والمنهجيات الجديدة لتقديم نتائج استثنائية لعملائنا.',
    'about.values.title': 'ما يحركنا',
    'about.values.subtitle': 'قيمنا الأساسية ومبادئنا التي توجه كل مشروع نقوم به',
    'about.mission': 'مهمتنا',
    'about.mission.desc': 'تمكين الشركات بحلول رقمية متطورة تدفع النمو والابتكار.',
    'about.vision': 'رؤيتنا',
    'about.vision.desc': 'أن نكون وكالة تطوير الويب الرائدة التي تحول الأفكار إلى تجارب رقمية قوية.',
    'about.values': 'قيمنا',
    'about.values.desc': 'الجودة والابتكار والشفافية ورضا العملاء في صميم كل ما نقوم به.',
    'about.team': 'فريقنا',
    'about.team.desc': 'فريق شغوف من المطورين والمصممين والاستراتيجيين مكرس لنجاحك.',
    'about.team.title': 'تعرف على فريقنا',
    'about.team.subtitle': 'الأفراد الموهوبون وراء نجاح Web01',
    'about.cta.title': 'مستعد للعمل معاً؟',
    'about.cta.subtitle': 'دعنا نناقش مشروعك وننشئ شيئاً مذهلاً معاً',
    'about.cta.button': 'ابدأ اليوم',
    
    // Services Page
    'services.page.title': 'خدماتنا',
    'services.page.subtitle': 'حلول رقمية شاملة مصممة خصيصاً لاحتياجات عملك',
    'services.packages.title': 'حزم الخدمات',
    'services.packages.subtitle': 'اختر الحزمة المثالية لاحتياجات عملك',
    'services.package.starter': 'حزمة البداية',
    'services.package.starter.desc': 'مثالية للشركات الصغيرة والناشئة',
    'services.package.professional': 'الحزمة المهنية',
    'services.package.professional.desc': 'مثالية للشركات النامية',
    'services.package.enterprise': 'حزمة المؤسسة',
    'services.package.enterprise.desc': 'حل كامل للمؤسسات الكبيرة',
    'services.package.popular': 'الأكثر شعبية',
    'services.package.choose': 'اختر الحزمة',
    'services.process.title': 'كيف نعمل',
    'services.process.subtitle': 'عمليتنا المثبتة تضمن تسليم المشروع بنجاح',
    'services.process.consultation': 'الاستشارة',
    'services.process.consultation.desc': 'نناقش متطلباتك وأهدافك',
    'services.process.planning': 'التخطيط',
    'services.process.planning.desc': 'خارطة طريق مفصلة للمشروع والجدول الزمني',
    'services.process.development': 'التطوير',
    'services.process.development.desc': 'بناء حلك مع تحديثات منتظمة',
    'services.process.launch': 'الإطلاق',
    'services.process.launch.desc': 'النشر والدعم المستمر',
    'services.cta.title': 'مستعد للبدء؟',
    'services.cta.subtitle': 'دعنا نناقش مشروعك ونقدم لك عرض سعر مخصص',
    'services.cta.button': 'طلب عرض سعر',
    'services.get.quote': 'احصل على عرض سعر',
    
    // Contact Page
    'contact.page.title': 'تواصل معنا',
    'contact.page.subtitle': 'مستعد لتحويل عملك بحلولنا الرقمية؟ دعنا نناقش مشروعك وننشئ شيئاً مذهلاً معاً.',
    'contact.get.in.touch': 'تواصل معنا',
    'contact.get.in.touch.desc': 'نحن هنا لمساعدتك في تحقيق رؤيتك الرقمية. اتصل بنا من خلال أي من الطرق التالية:',
    'contact.office.location': 'موقع المكتب',
    'contact.phone.numbers': 'أرقام الهاتف',
    'contact.email.address': 'عنوان البريد الإلكتروني',
    'contact.quick.response': 'استجابة سريعة',
    'contact.quick.response.desc': 'نحن عادة نرد على جميع الاستفسارات خلال 2-4 ساعات خلال ساعات العمل. للأمور العاجلة، يرجى الاتصال بنا مباشرة.',
    'contact.send.message': 'أرسل لنا رسالة',
    'contact.select.service': 'اختر الخدمة',
    'contact.budget.range': 'نطاق الميزانية (اختياري)',
    'contact.faq.title': 'الأسئلة الشائعة',
    'contact.faq.subtitle': 'أسئلة شائعة حول خدماتنا وعمليتنا',
    
    // Stats
    'stats.projects': 'مشاريع مكتملة',
    'stats.experience': 'سنوات خبرة',
    'stats.satisfaction': 'رضا العملاء',
    'stats.support': 'دعم متاح',
    
    // Services
    'services.title': 'حلول رقمية شاملة',
    'services.subtitle': 'من المفهوم إلى النشر، نتعامل مع كل جانب من جوانب حضورك الرقمي',
    'services.frontend': 'تطوير الواجهة الأمامية',
    'services.frontend.desc': 'واجهات مستخدم حديثة ومتجاوبة مبنية بـ React و Next.js و Vue.js وتقنيات متطورة',
    'services.backend': 'تطوير الخلفية',
    'services.backend.desc': 'حلول خادم قابلة للتوسع مع Node.js و Python وقواعد البيانات والبنية التحتية السحابية',
    'services.fullstack': 'تطبيقات ويب شاملة',
    'services.fullstack.desc': 'تطبيقات ويب كاملة مع المصادقة والمدفوعات والميزات في الوقت الفعلي ولوحات الإدارة',
    'services.ecommerce': 'منصات التجارة الإلكترونية',
    'services.ecommerce.desc': 'متاجر إلكترونية مخصصة مع إدارة المخزون ومعالجة المدفوعات وأنظمة تتبع الطلبات',
    'services.wordpress': 'حلول ووردبريس',
    'services.wordpress.desc': 'قوالب مخصصة، إضافات، متاجر WooCommerce، وتحسين الأداء',
    'services.mobile': 'تطبيقات الهاتف المحمول',
    'services.mobile.desc': 'تطبيقات محمولة متعددة المنصات باستخدام React Native و Flutter لـ iOS و Android',
    'services.whatsapp': 'روبوتات واتساب للأعمال',
    'services.whatsapp.desc': 'خدمة عملاء آلية، معالجة الطلبات، وحملات تسويقية عبر واتساب API',
    'services.telegram': 'روبوتات تليجرام',
    'services.telegram.desc': 'روبوتات تليجرام مخصصة لدعم العملاء والإشعارات وأتمتة الأعمال',
    'services.facebook': 'روبوتات فيسبوك ماسنجر',
    'services.facebook.desc': 'روبوتات محادثة ذكية لصفحات فيسبوك للتعامل مع الاستفسارات وتوليد العملاء المحتملين',
    'services.api': 'تطوير وتكامل API',
    'services.api.desc': 'واجهات برمجة تطبيقات RESTful، تكاملات طرف ثالث، وهندسة الخدمات المصغرة',
    'services.database': 'تصميم وإدارة قواعد البيانات',
    'services.database.desc': 'هياكل قواعد بيانات محسنة مع MySQL و PostgreSQL و MongoDB و Redis',
    'services.cloud': 'النشر السحابي و DevOps',
    'services.cloud.desc': 'نشر AWS و Google Cloud و Azure مع خطوط CI/CD والمراقبة',
    'services.viewAll': 'عرض جميع الخدمات',
    
    // Technologies
    'tech.title': 'التقنيات التي نتقنها',
    'tech.subtitle': 'نستخدم أحدث التقنيات وأكثرها موثوقية لبناء حلولك',
    'tech.frontend': 'الواجهة الأمامية',
    'tech.backend': 'الخلفية',
    'tech.mobile': 'الهاتف المحمول والروبوتات',
    
    // Process
    'process.title': 'عملية التطوير لدينا',
    'process.subtitle': 'منهجية مثبتة تضمن نجاح مشروعك',
    'process.discovery': 'الاكتشاف والتخطيط',
    'process.discovery.desc': 'نحلل متطلباتك وجمهورك المستهدف وأهدافك التجارية لإنشاء خارطة طريق مفصلة للمشروع',
    'process.design': 'التصميم والنماذج الأولية',
    'process.design.desc': 'تصميم محوره المستخدم مع الإطارات السلكية والنماذج والنماذج الأولية التفاعلية لموافقتك',
    'process.development': 'التطوير والاختبار',
    'process.development.desc': 'تطوير رشيق مع تحديثات منتظمة ومراجعات الكود واختبار شامل',
    'process.deployment': 'النشر والإطلاق',
    'process.deployment.desc': 'نشر سلس للإنتاج مع المراقبة والتحسين والدعم بعد الإطلاق',
    'process.maintenance': 'الصيانة والدعم',
    'process.maintenance.desc': 'دعم مستمر وتحديثات وتصحيحات أمنية وتحسينات الميزات',
    
    // Why Choose
    'why.title': 'لماذا تختار Web01؟',
    'why.subtitle': 'نحن نقدم نتائج تدفع عملك إلى الأمام',
    'why.experienced': 'فريق ذو خبرة',
    'why.experienced.desc': '5+ سنوات من الخبرة في التطوير الشامل والأتمتة',
    'why.custom': 'حلول مخصصة',
    'why.custom.desc': 'حلول مصممة خصيصاً لتناسب احتياجاتك التجارية المحددة وأهدافك',
    'why.fast': 'تسليم سريع',
    'why.fast.desc': 'عملية تطوير فعالة مع ضمان التسليم في الوقت المحدد',
    'why.support': 'دعم مستمر',
    'why.support.desc': 'دعم تقني 24/7 وصيانة بعد اكتمال المشروع',
    'why.pricing': 'أسعار تنافسية',
    'why.pricing.desc': 'حلول عالية الجودة بأسعار معقولة مع تسعير شفاف',
    'why.modern': 'تقنيات حديثة',
    'why.modern.desc': 'أحدث الأطر والأدوات للتطبيقات القابلة للتوسع والآمنة والسريعة',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد لبدء مشروعك؟',
    'contact.description': 'دعنا نناقش متطلباتك وننشئ شيئاً مذهلاً معاً',
    'contact.info': 'معلومات الاتصال',
    'contact.hours': 'ساعات العمل',
    'contact.hours.time': 'الأحد - الخميس: 9 صباحاً - 6 مساءً',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.quote': 'احصل على عرض سعر مجاني',
    'contact.call': 'جدولة مكالمة',
    
    // Footer
    'footer.description': 'وكالة تطوير ويب شاملة متخصصة في المواقع الحديثة وتطبيقات الويب وروبوتات الأتمتة الذكية للشركات في جميع أنحاء العالم.',
    'footer.links': 'روابط سريعة',
    'footer.rights': '© 2025 Web01. جميع الحقوق محفوظة.',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.className = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
