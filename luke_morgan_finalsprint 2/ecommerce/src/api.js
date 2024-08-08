import image1 from './Images/bedframe2.jpg';
import image2 from './Images/sofa.jpg';
import image3 from './Images/dresser.jpg';
import image4 from './Images/woodenchair.jpg';
import image5 from './Images/coffeetable2.jpg';
import image6 from './Images/roundtable.jpg';

const products = [
    {
        id: 1,
        name: 'BED FRAME',
        description: 'With its clean lines and classic accents, this bed frame anchors your bedroom in an effortlessly traditional style. It is made from powder-coated stainless steel and wrapped in polyester upholstery. The adjustable-height headboard gives you a place to recline while you read at night or eat breakfast in the morning.',
        price: 999.99,
        image: image1,
        dimensions: '84" L x 64" W x 52" H (Queen size)',
        weightCapacity: '600 lbs',
        material: 'Powder-coated stainless steel, polyester upholstery',
        assemblyRequired: true,
        features: [
            'Adjustable-height headboard',
            'Noise-free construction',
            'Easy-to-clean fabric'
        ],
        warranty: '2 years'
    },
    {
        id: 2,
        name: 'SOFA',
        description: 'This sofa brings a cozy, inviting feel to your living room or den. It features a cushioned back and a multiple cushion seat, offering a comfortable spot for three people to sit. The frame is made from engineered wood, and it showcases rounded arms and tapered solid wood legs that complement the corduroy upholstery for a harmonious look. Two accent pillows are included for added style and comfort.',
        price: 799.99,
        image: image2,
        dimensions: '82" W x 35" D x 34" H',
        seatHeight: '18"',
        seatDepth: '22"',
        weightCapacity: '750 lbs',
        material: 'Engineered wood frame, corduroy upholstery, solid wood legs',
        assemblyRequired: true,
        features: [
            'Removable seat cushions',
            'Two included accent pillows',
            'Easy-to-clean fabric'
        ],
        warranty: '1 year'
    },
    {
        id: 3,
        name: 'DRESSER',
        description: 'This double dresser adds modern style to your bedroom or guest room. It\'s built from solid pine and engineered wood with a neutral finish that showcases its natural wood grain, knots, and all. This dresser features a streamlined rectangular shape and stands on splayed tapered legs.',
        price: 459.99,
        image: image3,
        dimensions: '56" W x 18" D x 36" H',
        numberOfDrawers: 6,
        material: 'Solid pine, engineered wood',
        finish: 'Natural wood grain with a neutral finish',
        assemblyRequired: true,
        features: [
            'Metal drawer glides',
            'Anti-tip kit included',
            'Splayed tapered legs'
        ],
        warranty: '1 year'
    },
    {
        id: 4,
        name: 'WOODEN CHAIR',
        description: 'Old-school style meets new-school charm. Bring vintage vibes to any counter space, island, or bar area with this slender chair that has a frame, legs, and back crafted from solid American oak or walnut, and an engineered wood seat. The modern update on the classic, spindle-back design makes this piece both minimalist and versatile.',
        price: 199.99,
        image: image4,
        dimensions: '18" W x 20" D x 35" H',
        seatHeight: '18"',
        weightCapacity: '250 lbs',
        material: 'American oak/walnut, engineered wood seat',
        finish: 'Natural wood finish',
        assemblyRequired: false,
        features: [
            'Spindle-back design',
            'Footrest bar',
            'Minimalist style'
        ],
        warranty: '1 year'
    },
    {
        id: 5,
        name: 'COFFEE TABLE',
        description: 'This coffee table is a perfect pick for rounding out your living room ensemble. It features a clean-lined silhouette and a rectangular tabletop that provides the perfect perch for your favorite beverage, reading materials, and more. The frame is made from engineered wood and showcases a solid finish.',
        price: 299.99,
        image: image5,
        dimensions: '48" L x 24" W x 18" H',
        weightCapacity: '150 lbs',
        material: 'Engineered wood',
        finish: 'Solid finish',
        assemblyRequired: true,
        features: [
            'Lower storage shelf',
            'Easy-to-clean surface',
            'Sturdy construction'
        ],
        warranty: '1 year'
    },
    {
        id: 6,
        name: 'ROUND TABLE',
        description: 'This round Table provides a charming farmhouse allure for your home décor. This round table features a diamond veneer top in a reclaimed walnut wood finish. An antique cream finish on the pedestal base beautifully complements the tabletop, creating a warm farmhouse look. With its simple design, this round table pairs easily with your décor and serves as the focal point of your room.',
        price: 399.99,
        image: image6,
        dimensions: '48" Diameter x 30" H',
        weightCapacity: '200 lbs',
        material: 'Reclaimed walnut wood veneer, engineered wood pedestal base',
        finish: 'Antique cream base, walnut top',
        assemblyRequired: true,
        features: [
            'Farmhouse style',
            'Diamond veneer top',
            'Seats up to 4 people'
        ],
        warranty: '1 year'
    },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
    products.find((product) => product.id === productId);
