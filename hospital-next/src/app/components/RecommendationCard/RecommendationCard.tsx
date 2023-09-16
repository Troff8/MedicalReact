import styles from './RecommendationCard.module.css';

interface RecommendationCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, description, icon }) => {
    return <div className={styles.recommendationCard}>
        {icon}
        <h4>{title}</h4>
        <p>{description}</p>
    </div>;
};
export default RecommendationCard;
