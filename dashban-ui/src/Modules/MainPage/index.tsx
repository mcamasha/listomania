import * as React from 'react';

// Вынести
class MainPage extends React.Component<{},{}> {
    render() {
        return (
            <div className="col-xs-4">
                Будьте в курсе всех дел
                Приглашайте людей на доски и карточки, оставляйте комментарии, добавляйте сроки, и мы отобразим здесь наиболее важные активности.
            </div>
        );
    };
}

export default MainPage;