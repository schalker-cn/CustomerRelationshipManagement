import { Box, Card, Typography } from '@mui/material';
import { ActivityLog } from '../activity/ActivityLog';
import { Stack } from '@mui/material';

export function DashboardActivityLog() {
    return (
        <Stack>
            <Box display="flex" alignItems="center" mb={1}>
                <Typography
                    variant="h5"
                    sx={{ color: theme => theme.palette.text.secondary }}
                >
                    Latest Activity
                </Typography>
            </Box>
            <Card sx={{ mb: 2, px: 2 }}>
                <ActivityLog pageSize={10} />
            </Card>
        </Stack>
    );
}
