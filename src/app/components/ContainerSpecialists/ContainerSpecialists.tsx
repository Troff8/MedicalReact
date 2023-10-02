import React from 'react';
import CardSpecialist from '../CardSpecialist/CardSpecialist';
import styles from './ContainerSpecialists.module.css';

// const specialists = [
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
//     { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
// ];
const getSpecialists = async () => {
    const res = await fetch('http://localhost:3000/api/specialists', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed!');
    }
    return await res.json();
};

const ContainerSpecialists: React.FC = async () => {
    const specialists = await getSpecialists();
    console.log(specialists);
    return (
        <div className={styles.containerSpecialists}>
            {!!specialists.length &&
                specialists.map((specialist: any) => (
                    <CardSpecialist
                        title={`${specialist.rank},${specialist.name} ${specialist.surname}`}
                        direction={specialist.direction}
                        key={specialist.id}
                    />
                ))}
        </div>
    );
};

export default ContainerSpecialists;
