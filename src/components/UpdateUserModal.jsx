"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModalPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("image");

        try {
            await authClient.updateUser({
                name,
                image,
            });

            alert("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            alert("Update failed!");
        }
    };

    return (
        <Modal>
            <Button variant="secondary">
                <BiEdit /> Update Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    {/* Name */}
                                    <TextField className="w-full">
                                        <Label>Name</Label>
                                        <Input
                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </TextField>

                                    {/* Image */}
                                    <TextField className="w-full">
                                        <Label>Image URL</Label>
                                        <Input
                                            name="image"
                                            type="url"
                                            placeholder="Image URL"
                                        />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit" slot="close">
                                            Save
                                        </Button>
                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}