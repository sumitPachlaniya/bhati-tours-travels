// ============================================================================
// BHATI TOURS & TRAVELS - LOCAL SITE CONFIGURATION
// Edit phone numbers, email, office address, cars, packages & asset paths here.
// Drop local images inside the 'assets/' folder and reference them as 'assets/filename.jpg'.
// ============================================================================

window.SITE_CONFIG = {
    // 1. Backend & API Settings
    waProxyUrl: 'https://bhati-tours-travels.sumitpachlaniya123.workers.dev',
    web3formsKey: 'A7582f2f-e0c3-4a67-bb5a-40abc5b750ab',

    // 2. Contact Numbers, Gmail & Office Address
    dispatchWa: '918817278961',       // Receives booking alerts & floating WhatsApp button (with 91)
    callPhone: '919990905007',        // Public call & enquiry phone (with 91)
    adminEmail: 'sumitpachlaniya786@gmail.com',
    officeHeading: 'Contact Ujjain Office',
    officeAddress: 'Shop No. 14, Near Mahakal Lok Gate & Railway Station Road, Freeganj, Ujjain, Madhya Pradesh 456010',

    // 3. Top Announcement Bar & Hero Cover
    topInfoText: '24/7 Cab Availability in Ujjain, Indore Airport & Omkareshwar',
    topInfoPhoto: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=120&q=80',
    topInfoBg: '',                    // Optional: e.g. 'assets/top-banner.jpg'
    websiteLogo: '',                  // Optional: e.g. 'assets/logo.png' (leave empty for default Om icon)
    heroImage: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1920&q=80',
    heroOpacity: '50',                // Brightness percentage (15 to 90)

    // 4. Car Fleet (Add, edit, or change image paths to 'assets/car-name.jpg')
    fleet: [
        {
            id: 'car_dzire',
            name: 'Swift Dzire / Sedan',
            optionValue: 'Swift Dzire / Sedan (4+1 Seater)',
            badge: 'Comfort Sedan',
            badgeColor: 'bg-navy-900/90',
            subtitle: 'Ideal for couples & small families (4 Passengers + Luggage)',
            seats: '4 + 1 Seating Capacity',
            ac: 'Dual Air Conditioning',
            bags: '2 Medium Bags Space',
            routeNote: 'Local Darshan & Airport Drops',
            featured: false,
            image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
            fallback: 'https://placehold.co/800x500/f1f5f9/0f172a?text=Swift+Dzire+Sedan'
        },
        {
            id: 'car_ertiga',
            name: 'Maruti Ertiga / SUV',
            optionValue: 'Maruti Ertiga / SUV (6+1 Seater)',
            badge: 'Family Choice',
            badgeColor: 'bg-saffron-600',
            subtitle: 'Spacious 6+1 seater for joint families & Omkareshwar trips',
            seats: '6 + 1 Seating Capacity',
            ac: 'Roof-Mounted Rear AC Vents',
            bags: '3–4 Bags + Carrier Option',
            routeNote: 'Ujjain & Omkareshwar Tours',
            featured: true,
            image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
            fallback: 'https://placehold.co/800x500/ffedd5/ea580c?text=Maruti+Ertiga+SUV'
        },
        {
            id: 'car_innova',
            name: 'Toyota Innova Crysta',
            optionValue: 'Toyota Innova Crysta (6+1/7+1 Seater)',
            badge: 'VIP Comfort',
            badgeColor: 'bg-navy-900/90',
            subtitle: 'Premium captain-seat luxury for senior citizens & long circuits',
            seats: '6+1 / 7+1 Captain Seats',
            ac: 'Automatic Climate Control AC',
            bags: 'Ample Boot + Roof Carrier',
            routeNote: 'Multi-Day MP Pilgrimage Tours',
            featured: false,
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
            fallback: 'https://placehold.co/800x500/f1f5f9/0f172a?text=Toyota+Innova+Crysta'
        },
        {
            id: 'car_tempo',
            name: 'Tempo Traveller',
            optionValue: 'Tempo Traveller (12/17/26 Seater)',
            badge: 'Group Yatra',
            badgeColor: 'bg-navy-900/90',
            subtitle: 'Pushback Maharaja seats for 12, 17 & 26 member group yatras',
            seats: '12 / 17 / 26 Pushback Seats',
            ac: 'Heavy-Duty Full Cabin AC',
            bags: 'LED Screen, Mic & Charging',
            routeNote: 'Custom MP Group Circuits',
            featured: false,
            image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
            fallback: 'https://placehold.co/800x500/f1f5f9/0f172a?text=Force+Tempo+Traveller'
        }
    ],

    // 5. Tour Packages & Locations (Change photo urls to 'assets/location.jpg')
    packages: [
        {
            id: 'ujjain',
            title: 'Ujjain Local Darshan & Mahakal Lok Tour',
            enquireText: 'Ujjain Local Darshan (Mahakaleshwar, Kal Bhairav, Harsiddhi, Ram Ghat)',
            duration: 'Full Day (8–10 Hours)',
            badge: 'Bestseller',
            badgeColor: 'bg-emerald-600',
            description: 'Complete spiritual darshan of Avantika Nagari with doorstep hotel/station pickup and zero parking hassle near temple corridors.',
            highlightsTitle: 'Key Temple Highlights Covered:',
            highlights: [
                'Mahakaleshwar & Mahakal Lok',
                'Kal Bhairav Temple',
                'Harsiddhi Shaktipeeth',
                'Shipra Ram Ghat Aarti',
                'Mangalnath Temple',
                'Sandipani Ashram & Chintaman'
            ],
            footerNote: 'Sedan, SUV & Tempo Available',
            ctaText: 'Book Tour',
            currentIndex: 0,
            photos: [
                { url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Shri+Mahakaleshwar+Jyotirlinga', caption: 'Shri Mahakaleshwar Jyotirlinga' },
                { url: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Shri+Mahakal+Lok+Corridor', caption: 'Shri Mahakal Lok Corridor' },
                { url: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Shipra+Ram+Ghat+Evening+Aarti', caption: 'Shipra Ram Ghat Evening Aarti' },
                { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Shri+Kal+Bhairav+Temple', caption: 'Shri Kal Bhairav Temple' },
                { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Maa+Harsiddhi+Shaktipeeth', caption: 'Maa Harsiddhi Shaktipeeth' }
            ]
        },
        {
            id: 'omkareshwar',
            title: 'Ujjain to Omkareshwar Same Day Tour',
            enquireText: 'Ujjain to Omkareshwar Same Day Return Tour',
            duration: 'Same Day Return (12–14 Hours)',
            badge: '2 Jyotirlinga Yatra',
            badgeColor: 'bg-navy-900/90',
            description: 'Comfortable round-trip cab from Ujjain (~140 km each way via Indore highway) to complete your sacred Jyotirlinga pilgrimage on the banks of Narmada.',
            highlightsTitle: 'Package Highlights:',
            highlights: [
                'Shri Omkareshwar Jyotirlinga',
                'Mamleshwar Temple Darshan',
                'Narmada Ghat & Jhula Pul',
                'Optional Indore Chappan Stop'
            ],
            footerNote: 'Doorstep Pickup & Drop',
            ctaText: 'Book Tour',
            currentIndex: 0,
            photos: [
                { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Shri+Omkareshwar+Jyotirlinga', caption: 'Shri Omkareshwar Jyotirlinga' },
                { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Sacred+Narmada+River+Ghat', caption: 'Sacred Narmada River Ghat' },
                { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Omkareshwar+Jhula+Pul', caption: 'Omkareshwar Suspension Jhula Pul' },
                { url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Shri+Mamleshwar+Jyotirlinga', caption: 'Shri Mamleshwar Temple' },
                { url: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Narmada+Sangam+Boat+Parikrama', caption: 'Narmada Sangam Boat Parikrama' }
            ]
        },
        {
            id: 'airport',
            title: 'Indore Airport to Ujjain Pickup / Drop',
            enquireText: 'Indore Airport to Ujjain Taxi Transfer',
            duration: '1 Hr 15 Mins (~58 km)',
            badge: '24/7 Flight Tracking',
            badgeColor: 'bg-blue-600',
            description: 'Punctual airport transfers from Devi Ahilyabai Holkar Airport (IDR) to any hotel, dharamshala, or temple gate in Ujjain—day or midnight.',
            highlightsTitle: 'Transfer Benefits:',
            highlights: [
                'Placard Arrival Pickup',
                'Zero Waiting Hassle',
                'Sanitized Luggage Carrier',
                'Early Morning Bhasma Aarti Drop'
            ],
            footerNote: '24/7 Day & Night Transfers',
            ctaText: 'Book Transfer',
            currentIndex: 0,
            photos: [
                { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Indore+Airport+IDR+Arrival', caption: 'Indore Airport (IDR) Arrival Pickup' },
                { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Indore+Ujjain+4-Lane+Highway', caption: 'Smooth Indore–Ujjain 4-Lane Highway' },
                { url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Indore+Rajwada+Optional+Stop', caption: 'Optional Indore Rajwada & Chappan Stop' },
                { url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Direct+Drop+at+Ujjain+Hotel', caption: 'Doorstep Drop at Ujjain Hotel / Temple' }
            ]
        },
        {
            id: 'circuit',
            title: 'Ujjain – Omkareshwar – Maheshwar – Mandu',
            enquireText: 'Ujjain - Omkareshwar - Maheshwar - Mandu 3-Day Circuit',
            duration: '2 Nights / 3 Days Circuit',
            badge: 'Malwa Heritage',
            badgeColor: 'bg-purple-600',
            description: 'Explore the spiritual and royal heritage of Madhya Pradesh in one seamless multi-day family tour with dedicated cab and experienced guide-driver.',
            highlightsTitle: 'Circuit Destinations:',
            highlights: [
                'Mahakaleshwar & Ujjain Temples',
                'Omkareshwar Jyotirlinga',
                'Ahilya Fort & Maheshwar Ghat',
                'Jahaz Mahal & Mandu Forts'
            ],
            footerNote: 'Customizable Multi-Day Yatra',
            ctaText: 'Book Tour',
            currentIndex: 0,
            photos: [
                { url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Ahilya+Fort+Maheshwar', caption: 'Ahilya Fort & Maheshwar Narmada Ghat' },
                { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Jahaz+Mahal+Mandu', caption: 'Jahaz Mahal (Ship Palace), Mandu' },
                { url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Rani+Roopmati+Pavilion+Mandu', caption: 'Rani Roopmati Pavilion, Mandu' },
                { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Omkareshwar+Jyotirlinga', caption: 'Shri Omkareshwar Jyotirlinga' },
                { url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80', fallback: 'https://placehold.co/1000x560/0f172a/ea580c?text=Mahakaleshwar+Ujjain', caption: 'Shri Mahakaleshwar Temple, Ujjain' }
            ]
        }
    ]
};
