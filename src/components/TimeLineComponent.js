import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';

export default function LeftPositionedTimeline() {
    return (
        <Timeline sx={{ "& .MuiTimelineDot-root": { bgcolor: "primary.main" } }}>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary" sx={{display: "flex", flexDirection: "column", alignItems: "end"}}>
                    Julio 2024 - Septiembre 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span className='text-lg font-bold'>Desarrollador Full Stack</span><br />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Marzo 2024 - Mayo 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span className='text-lg font-bold'>Auxiliar de archivos</span><br />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Febrero 2022 - Julio 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                    <span className='text-lg font-bold'>Consultor de ventas</span><br />
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
