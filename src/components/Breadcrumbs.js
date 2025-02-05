import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom'

export const Breadcrumbs = ({
    links
}) => {
    // Usage Example:
    // <Breadcrumbs 
    //    links={[
    //        { name: 'Home', href: '/' },
    //        { name: 'Category', href: '/category' },
    //        { name: 'Product', href: '/category/product' }
    //    ]}
    // />
    return (
        <Breadcrumb>
            {links.map(({ name, href }, index) => (
                <Breadcrumb.Item key={index} active={index === links.length - 1}>
                    {index === links.length - 1 ? (
                        name
                    ) : (
                        <Link to={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {name}
                        </Link>
                    )}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}