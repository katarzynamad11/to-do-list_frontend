import { useForm } from '@mantine/form';
import { TextInput, Button, Stack, Paper, Title } from '@mantine/core';
import { login } from './api/login';
import { loginErrorNotification } from './notifications';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

type LoginFormType = {
    email: string;
    password: string;
};

export const LoginPage: FC = () => {
    const navigate = useNavigate();
    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: ''
        },
    });

    const handleSubmit = async (data: LoginFormType) => {
        try {
            await login(data.email, data.password);
            navigate('/todo');
        } catch (error) {
            loginErrorNotification();
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f2f2f2',
                padding: '20px',
            }}
        >
            <Paper
                p="xl"
                radius="md"
                shadow="md"
                style={{
                    width: '100%',
                    maxWidth: 400,
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box',
                }}
            >
                <Title order={2} style={{ marginBottom: '20px', color: '#3b5998', textAlign: 'center' }}>
                    Login to Your Account
                </Title>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack gap="md">
                        <TextInput
                            required
                            type="email"
                            label="Email"
                            placeholder="Your email"
                            {...form.getInputProps('email')}
                            styles={{
                                input: {
                                    borderRadius: '8px',
                                    borderColor: '#ddd',
                                    transition: 'border-color 0.2s ease-in-out',
                                },
                            }}
                        />
                        <TextInput
                            required
                            type="password"
                            label="Password"
                            placeholder="Your password"
                            {...form.getInputProps('password')}
                            styles={{
                                input: {
                                    borderRadius: '8px',
                                    borderColor: '#ddd',
                                    transition: 'border-color 0.2s ease-in-out',
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            styles={{
                                root: {
                                    backgroundColor: '#3b5998',
                                    color: 'white',
                                    borderRadius: '8px',
                                    padding: '10px 0',
                                    '&:hover': {
                                        backgroundColor: '#2d4373',
                                    },
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </div>
    );
};
