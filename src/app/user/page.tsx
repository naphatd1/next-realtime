import Typography from '@mui/material/Typography'
import { user } from '../db/schema'
import db from '../lib/db'
import { Box } from '@mui/material'
import { desc } from 'drizzle-orm'

export default async function UserPage() {
  const users = await db.select().from(user).orderBy(desc(user.id))
  const countUser = await db.$count(user)
  return (
    <main>
      <Typography sx={{ m: 1 }} variant="h5">
        ผู้ใช้ทั้งหมด {countUser}
      </Typography>
      {users.length > 0 &&
        users.map((item) => {
          return (
            <>
              <Box
                component="div"
                sx={{
                  ml: 1,
                  color: 'primary.main',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >
                <p key={item.id}>
                  {item.fullname}:{item.id}
                </p>
              </Box>
            </>
          )
        })}
    </main>
  )
}
