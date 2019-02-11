import { connect } from 'react-redux';
import Link, { NavLink } from 'redux-first-router-link';
import { nameLinkSelector } from 'controllers/testItem';

export const NameLink = connect((state, ownProps) => ({
  link: nameLinkSelector(state, ownProps),
}))(
  ({
    className,
    page,
    link,
    itemId,
    children,
    uniqueId,
    testItemIds,
    ownLinkParams = {},
    ...rest
  }) =>
    ownLinkParams.isOtherPage ? (
      <NavLink to={link} className={className} {...rest}>
        {children}
      </NavLink>
    ) : (
      <Link to={link} className={className} {...rest}>
        {children}
      </Link>
    ),
);
