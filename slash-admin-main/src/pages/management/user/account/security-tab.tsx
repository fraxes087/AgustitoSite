import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { Form, Input } from "antd";
import { toast } from "sonner";

type FieldType = {
	oldPassword?: string;
	newPassword?: string;
	confirmPassword?: string;
};
export default function SecurityTab() {
	const initFormValues = {
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	};
	const handleClick = () => {
		toast.success("Update success!");
	};

	return (
		<Card>
			<CardContent>
				<Form layout="vertical" initialValues={initFormValues} labelCol={{ span: 8 }} className="w-full">
					<Form.Item<FieldType> label="Old Password" name="oldPassword">
						<Input.Password />
					</Form.Item>

					<Form.Item<FieldType> label="New Password" name="newPassword">
						<Input.Password />
					</Form.Item>

					<Form.Item<FieldType> label="Confirm New Password" name="confirmPassword">
						<Input.Password />
					</Form.Item>
				</Form>
				<div className="flex w-full justify-end">
					<Button onClick={handleClick}>Save Changes</Button>
				</div>
			</CardContent>
		</Card>
	);
}
