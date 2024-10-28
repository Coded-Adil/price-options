import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 88 },
        { id: 2, name: "Bob", math: 85, physics: 80, chemistry: 82 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 91 },
        { id: 4, name: "David", math: 74, physics: 76, chemistry: 78 },
        { id: 5, name: "Eva", math: 88, physics: 84, chemistry: 86 },
        { id: 6, name: "Frank", math: 69, physics: 72, chemistry: 70 },
        { id: 7, name: "Grace", math: 95, physics: 93, chemistry: 96 },
        { id: 8, name: "Hannah", math: 80, physics: 82, chemistry: 79 },
        { id: 9, name: "Ivy", math: 76, physics: 78, chemistry: 75 },
        { id: 10, name: "Jack", math: 82, physics: 85, chemistry: 87 }
      ];
      

    return (
        <div>
            <LineChart width={500} height={200} data={studentMarks}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line type={'monotone'} dataKey="math" stroke='green'></Line>
                <Line type={'monotone'} dataKey={'physics'} stroke='blue'></Line>
                <Line type={'monotone'} dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;